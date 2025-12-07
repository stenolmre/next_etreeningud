import { db } from '~/server/db'

import type { IUser, IWorkout } from '~/server/db/schema'

export async function getSettings() {
  return (await db()).collection('settings').findOne<{ name: string }>()
}

export async function getWorkouts() {
  return (await db()).collection<IWorkout>('fitnesses').find({}, { projection: {} }).toArray()
}

export async function getUsers() {
  return (await db()).collection<IUser>('admins').find({}, { projection: {} }).toArray()
}
