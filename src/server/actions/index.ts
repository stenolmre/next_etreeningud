import { db } from '~/server/db'

import type { IUser } from '~/server/db/schema'

export async function getSettings() {
  return (await db()).collection('settings').findOne<{ name: string }>()
}

export async function getUsers() {
  return (await db()).collection<IUser>('users').find().toArray()
}
