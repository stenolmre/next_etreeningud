import { db } from '~/server/db'

import type { IAuthor } from '~/server/db/schema'

const DB_NAME = 'authors'

export async function getAuthors() {
  return (await db()).collection<IAuthor>(DB_NAME).find().toArray()
}

// @todo - allow it only for admins
export async function insertAuthor(new_author: IAuthor) {
  return (await db()).collection<IAuthor>(DB_NAME).insertOne(new_author)
}
