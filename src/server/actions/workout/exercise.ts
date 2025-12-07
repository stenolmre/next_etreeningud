import { ObjectId } from 'mongodb'

import { checkPermissionToUpdate } from '~/lib/permission'
import { db } from '~/server/db'

import type { IExercise } from '~/server/db/schema'

const DB_NAME = 'exercises'

export async function getExercises() {
  return (await db()).collection<IExercise>(DB_NAME).find().toArray()
}

export async function insertExercise(new_exercise: IExercise) {
  await checkPermissionToUpdate()
  return (await db()).collection<IExercise>(DB_NAME).insertOne(new_exercise)
}

export async function updateExercise(id: string, updated_exercise: Partial<IExercise>) {
  await checkPermissionToUpdate()

  let _id: ObjectId
  try {
    _id = new ObjectId(id)
  } catch {
    throw new Error('Invalid exercise ID')
  }

  return (await db()).collection<IExercise>(DB_NAME).updateOne({ _id }, { $set: updated_exercise })
}
