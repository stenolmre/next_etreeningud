import { ObjectId } from 'mongodb'

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

export async function getAuthors() {
  return (await db()).collection(DB_NAME).aggregate<WithId<IAuthor>>(AGGREGATE).toArray()
}

export async function getAuthor(author_id: string): Promise<WithId<IAuthor> | undefined> {
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
