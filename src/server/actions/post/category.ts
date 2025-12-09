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

export async function getPostCategories() {
  return (await db()).collection(DB_NAME).aggregate<WithId<IPostCategory>>(AGGREGATE).toArray()
}

export async function getPostCategory(
  post_category_id: string,
): Promise<WithId<IPostCategory> | undefined> {
  const _id = validateObjectId([post_category_id], 'Post category ID is invalid')[0]

  const category = await (
    await db()
  )
    .collection(DB_NAME)
    .aggregate<WithId<IPostCategory>>([{ $match: { _id } }, ...AGGREGATE])
    .next()

  if (category) {
    return category
  }
}
