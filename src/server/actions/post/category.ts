import { ObjectId } from 'mongodb'

import { checkPermissionToUpdate } from '~/lib/permission'
import { db } from '~/server/db'

import type { IPostCategory } from '~/server/db/schema'

const DB_NAME = 'post_categories'

export async function getPostCategories() {
  return (await db()).collection<IPostCategory>(DB_NAME).find().toArray()
}

export async function insertPostCategory(new_post_category: IPostCategory) {
  await checkPermissionToUpdate()
  return (await db()).collection<IPostCategory>(DB_NAME).insertOne(new_post_category)
}

export async function updatePostCategory(
  id: string,
  updated_workout_category: Partial<IPostCategory>,
) {
  await checkPermissionToUpdate()

  let _id: ObjectId
  try {
    _id = new ObjectId(id)
  } catch {
    throw new Error('Invalid Workout category ID')
  }

  return (await db())
    .collection<IPostCategory>(DB_NAME)
    .updateOne({ _id }, { $set: updated_workout_category })
}
