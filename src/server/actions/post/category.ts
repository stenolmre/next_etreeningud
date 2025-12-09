'use server'

import { MongoError, ObjectId, type InsertOneResult, type UpdateResult } from 'mongodb'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { validateObjectId } from '~/lib/validate-object-id'
import { db } from '~/server/db'

import type { IPostCategory, WithId } from '~/server/db/schema'

const DB_NAME = 'post_categories'

const AGGREGATE = [
  {
    $addFields: {
      _id: { $toString: '$_id' },
    },
  },
]

const schema = z.object({
  label: z.string().nonempty('Invalid category label'),
})

export async function getPostCategories() {
  return (await db()).collection(DB_NAME).aggregate<WithId<IPostCategory>>(AGGREGATE).toArray()
}

export async function getPostCategory(
  post_category_id: string,
): Promise<WithId<IPostCategory> | undefined> {
  try {
    validateObjectId([post_category_id], 'Post category ID is invalid')[0]
  } catch {
    return undefined
  }

  const category = await (
    await db()
  )
    .collection(DB_NAME)
    .aggregate<WithId<IPostCategory>>([
      { $match: { _id: new ObjectId(post_category_id) } },
      ...AGGREGATE,
    ])
    .next()

  if (category) {
    return category
  }
}

export async function insertPostCategory(
  initial_state: { error?: { label?: string[] } },
  formData: FormData,
) {
  const validated_fields = schema.safeParse({
    label: formData.get('label'),
  })

  if (!validated_fields.success) {
    return {
      error: validated_fields.error.flatten().fieldErrors,
    }
  }

  let result: InsertOneResult<IPostCategory>

  try {
    result = await (await db()).collection<IPostCategory>(DB_NAME).insertOne({
      label: validated_fields.data.label,
    })
  } catch (error) {
    if (error instanceof MongoError && error.code === 11000) {
      return {
        error: {
          label: ['Category label must be unique'],
        },
      }
    }

    return {
      error: {
        label: [(error as Error)?.message ?? 'An unknown error occurred'],
      },
    }
  }

  redirect(`/d/posts/categories/${result.insertedId.toHexString()}`)
}

export async function updatePostCategory(
  post_category_id: string,
  initial_state: { error?: { label?: string[] } },
  formData: FormData,
) {
  const validated_fields = schema.safeParse({
    label: formData.get('label'),
  })

  const label = validated_fields.data?.label

  if (!validated_fields.success) {
    return {
      error: validated_fields.error.flatten().fieldErrors,
      label,
    }
  }

  let result: UpdateResult<IPostCategory>

  try {
    validateObjectId([post_category_id], 'Post category ID is invalid')[0]

    result = await (await db()).collection<IPostCategory>(DB_NAME).updateOne(
      {
        _id: new ObjectId(post_category_id),
      },
      {
        $set: {
          label,
        },
      },
    )

    revalidatePath('/d/posts/categories')

    return {
      label,
    }
  } catch (error) {
    if (error instanceof MongoError && error.code === 11000) {
      return {
        error: {
          label: ['Category label must be unique'],
        },
        label,
      }
    }

    return {
      error: {
        label: [(error as Error)?.message ?? 'An unknown error occurred'],
      },
      label,
    }
  }
}

export async function deletePostCategory(post_category_id: string): Promise<{ error?: string }> {
  try {
    validateObjectId([post_category_id], 'Post category ID is invalid')[0]

    await (await db()).collection<IPostCategory>(DB_NAME).deleteOne({
      _id: new ObjectId(post_category_id),
    })

    revalidatePath('/d/posts/categories')
    return {}
  } catch (error) {
    return {
      error: (error as Error)?.message ?? 'An unknown error occurred',
    }
  }
}
