import moment from 'moment'
import { getServerSession } from 'next-auth'

import { authOptions } from '~/lib/auth'
import { db } from '~/server/db'

import type { JWT } from 'next-auth/jwt'
import type { WithId } from 'mongodb'
import type { IUser } from '~/server/db/schema'

export async function authenticate(token: JWT): Promise<WithId<IUser> | null> {
  if (token.email == null) {
    return token.user
  }

  const database = await db()

  const user = await database.collection<IUser>('users').findOne({ email: token.email })

  if (user) {
    return user
  }

  const timestamp = moment().unix()

  const new_user = await database.collection<IUser>('users').insertOne({
    email: token.email,
    name: token.name ?? 'Unknown',
    image: token.picture ?? undefined,
    permissions: 1,
    created_on: timestamp,
    updated_on: timestamp,
  })

  if (!new_user.acknowledged) {
    throw new Error('Failed to create new user')
  }

  return database.collection<IUser>('users').findOne({ email: token.email })
}

export function getSession() {
  return getServerSession(authOptions)
}

export async function getSessionUser(): Promise<IUser> {
  const session = await getSession()

  if (!session) {
    throw new Error('Not authorized')
  }

  return session.user
}
