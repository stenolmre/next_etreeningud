'use server'

import { MongoError, ObjectId, type InsertOneResult } from 'mongodb'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import z from 'zod'

import { validateObjectId } from '~/lib/validate-object-id'
import { db } from '~/server/db'

import type { IAuthor, WithId } from '~/server/db/schema'

const DB_NAME = 'authors'

const AGGREGATE = [
  {
    $addFields: {
      _id: { $toString: '$_id' },
    },
  },
]

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  image: z.string().nonempty('Image URL is required'),
  bio: z.string().nonempty('Bio is required'),
  social_links: z
    .array(
      z.object({
        link: z.string().min(1, 'Link is required'),
        icon: z.string().min(1, 'Icon is required'),
      }),
    )
    .optional()
    .default([]),
})

export async function getAuthors() {
  return (await db()).collection(DB_NAME).aggregate<WithId<IAuthor>>(AGGREGATE).toArray()
}

export async function getAuthor(author_id: string) {
  try {
    validateObjectId([author_id], 'Author ID is invalid')[0]
  } catch {
    return undefined
  }

  const author = await (
    await db()
  )
    .collection(DB_NAME)
    .aggregate<WithId<IAuthor>>([{ $match: { _id: new ObjectId(author_id) } }, ...AGGREGATE])
    .next()

  if (author) {
    return author
  }
}

export async function insertAuthor(
  prevState: {
    error?: string
    fieldErrors?: Record<string, string[]>
    formData?: FormData
  } | null,
  formData: FormData,
): Promise<typeof prevState> {
  let result: InsertOneResult<IAuthor>

  const validation = schema.safeParse({
    name: formData.get('name'),
    image: formData.get('image'),
    bio: formData.get('bio'),
  })

  if (!validation.success) {
    const fieldErrors: Record<string, string[]> = {}

    validation.error.issues.forEach(err => {
      const path = err.path[0] as string
      if (!fieldErrors[path]) {
        fieldErrors[path] = []
      }
      fieldErrors[path]?.push(err.message)
    })

    return { fieldErrors, formData }
  }

  try {
    result = await (await db()).collection(DB_NAME).insertOne(validation.data)
    revalidatePath('/d/posts/authors')
  } catch (error) {
    if (error instanceof MongoError && error.code === 11000) {
      return {
        fieldErrors: {
          name: ['Author name must be unique'],
        },
        formData,
      }
    }

    if (error instanceof Error) {
      return {
        error: error.message,
        formData,
      }
    }

    return { error: 'Failed to create author. Please try again.' }
  }

  redirect(`/d/posts/authors/${result.insertedId.toHexString()}`)
}

export async function updateAuthor(
  author_id: string,
  prevState: {
    error?: string
    fieldErrors?: Record<string, string[]>
    formData?: FormData
  } | null,
  formData: FormData,
): Promise<typeof prevState> {
  const validation = schema.safeParse({
    name: formData.get('name'),
    image: formData.get('image'),
    bio: formData.get('bio'),
  })

  if (!validation.success) {
    const fieldErrors: Record<string, string[]> = {}

    validation.error.issues.forEach(err => {
      const path = err.path[0] as string
      if (!fieldErrors[path]) {
        fieldErrors[path] = []
      }
      fieldErrors[path]?.push(err.message)
    })

    return { fieldErrors, formData }
  }

  try {
    await (await db())
      .collection(DB_NAME)
      .updateOne({ _id: new ObjectId(author_id) }, { $set: validation.data })
    revalidatePath('/d/posts/authors')
    revalidatePath(`/d/posts/authors/${author_id}`)

    return {
      formData,
    }
  } catch (error) {
    if (error instanceof MongoError && error.code === 11000) {
      return {
        fieldErrors: {
          name: ['Author name must be unique'],
        },
        formData,
      }
    }

    if (error instanceof Error) {
      return {
        error: error.message,
        formData,
      }
    }

    return { error: 'Failed to update author. Please try again.' }
  }
}

export async function deleteAuthor(
  author_id: string,
  prevState: {
    error?: string
    fieldErrors?: Record<string, string[]>
    formData?: FormData
  } | null,
): Promise<typeof prevState> {
  try {
    await (await db()).collection(DB_NAME).deleteOne({ _id: new ObjectId(author_id) })
    revalidatePath('/d/posts/authors')
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      }
    }

    return { error: 'Failed to delete author. Please try again.' }
  }

  redirect('/d/posts/authors')
}
