import { db } from '~/server/db'

import type { IAuthor } from '~/server/db/schema'

const DB_NAME = 'authors'

export async function getAuthors() {
  return (await db()).collection<IAuthor>(DB_NAME).find().toArray()
}
