import { checkPermissionToUpdate } from '~/lib/permission'
import { validateObjectId } from '~/lib/validate-object-id'
import { db } from '~/server/db'

import type { IAuthor } from '~/server/db/schema'

const DB_NAME = 'authors'

export async function getAuthors() {
  return (await db()).collection<IAuthor>(DB_NAME).find().toArray()
}

export async function insertAuthor(new_author: IAuthor) {
  await checkPermissionToUpdate()
  return (await db()).collection<IAuthor>(DB_NAME).insertOne(new_author)
}

export async function updateAuthor(author_id: string, updated_author: Partial<IAuthor>) {
  await checkPermissionToUpdate()

  const _id = validateObjectId([author_id], 'Invalid author ID')[0]

  return (await db()).collection<IAuthor>(DB_NAME).updateOne({ _id }, { $set: updated_author })
}
