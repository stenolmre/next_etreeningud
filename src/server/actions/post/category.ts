import { db } from '~/server/db'

import type { IPostCategory } from '~/server/db/schema'

const DB_NAME = 'post_categories'

export async function getPostCategories() {
  return (await db()).collection<IPostCategory>(DB_NAME).find().toArray()
}

// @todo - allow it only for admins
export async function insertPostCategory(new_post_category: IPostCategory) {
  return (await db()).collection<IPostCategory>(DB_NAME).insertOne(new_post_category)
}
