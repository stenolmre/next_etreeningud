import { ObjectId } from 'mongodb'

import { checkPermissionToUpdate } from '~/lib/permission'
import { db } from '~/server/db'

import type { IWorkoutEquipment } from '~/server/db/schema'

const DB_NAME = 'workout_equipments'

export async function getWorkoutEquipments() {
  return (await db()).collection<IWorkoutEquipment>(DB_NAME).find().toArray()
}

export async function insertWorkoutEquipment(new_workout_equipment: IWorkoutEquipment) {
  await checkPermissionToUpdate()
  return (await db()).collection<IWorkoutEquipment>(DB_NAME).insertOne(new_workout_equipment)
}

export async function updateWorkoutEquipment(
  id: string,
  updated_workout_equipment: Partial<IWorkoutEquipment>,
) {
  await checkPermissionToUpdate()

  let _id: ObjectId
  try {
    _id = new ObjectId(id)
  } catch {
    throw new Error('Invalid Workout equipment ID')
  }

  return (await db())
    .collection<IWorkoutEquipment>(DB_NAME)
    .updateOne({ _id }, { $set: updated_workout_equipment })
}
