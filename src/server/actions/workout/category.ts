import { ObjectId } from 'mongodb'

import { checkPermissionToUpdate } from '~/lib/permission'
import { db } from '~/server/db'

import type { IWorkoutCategory } from '~/server/db/schema'

const DB_NAME = 'workout_categories'

export async function getWorkoutCategories() {
  return (await db()).collection<IWorkoutCategory>(DB_NAME).find().toArray()
}

export async function insertWorkoutCategory(new_workout_category: IWorkoutCategory) {
  await checkPermissionToUpdate()
  return (await db()).collection<IWorkoutCategory>(DB_NAME).insertOne(new_workout_category)
}

export async function updateWorkoutCategory(
  id: string,
  updated_workout_category: Partial<IWorkoutCategory>,
) {
  await checkPermissionToUpdate()

  let _id: ObjectId
  try {
    _id = new ObjectId(id)
  } catch {
    throw new Error('Invalid Workout category ID')
  }

  return (await db())
    .collection<IWorkoutCategory>(DB_NAME)
    .updateOne({ _id }, { $set: updated_workout_category })
}
