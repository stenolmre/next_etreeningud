import moment from 'moment'
import { ObjectId } from 'mongodb'

import { db } from '~/server/db'

import type { IPost } from '~/server/db/schema'

const DB_NAME = 'posts'

const AGGREGATION = [
  {
    $lookup: {
      from: 'authors',
      localField: 'authors',
      foreignField: '_id',
      as: '__authors',
    },
  },
  {
    $lookup: {
      from: 'post_categories',
      localField: 'categories',
      foreignField: '_id',
      as: '__categories',
    },
  },
  {
    $addFields: {
      authors: '$__authors',
      categories: '$__categories',
    },
  },
  {
    $unset: '__authors',
  },
  {
    $unset: '__categories',
  },
]

export async function getPosts() {
  return (await db()).collection<IPost>(DB_NAME).aggregate<IPost>(AGGREGATION).toArray()
}

export async function getPost(post_id: string) {
  let _id: ObjectId
  try {
    _id = new ObjectId(post_id)
  } catch {
    throw new Error('Invalid post ID')
  }

  return (await db()).collection<IPost>(DB_NAME).aggregate<IPost>(AGGREGATION).next()
}

// @todo - allow it only for admins
export async function insertPost(
  new_post: Pick<IPost, 'name' | 'image' | 'content' | 'excerpt'> & {
    author: string[]
    categories?: string[]
  },
) {
  const timestamp = moment().unix()
  let authors: ObjectId[]
  let categories: ObjectId[] = []

  try {
    authors = new_post.author.map(a => new ObjectId(a))
    if (new_post.categories) {
      categories = new_post.categories.map(c => new ObjectId(c))
    }
  } catch {
    throw new Error('Invalid author ID')
  }

  return (await db())
    .collection<
      Omit<IPost, 'authors' | 'categories'> & { authors: ObjectId[]; categories: ObjectId[] }
    >(DB_NAME)
    .insertOne({
      ...new_post,
      authors,
      categories,
      created_on: timestamp,
      updated_on: timestamp,
    })
}
