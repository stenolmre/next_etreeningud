import moment from 'moment'
import { ObjectId } from 'mongodb'

import { checkPermissionToUpdate } from '~/lib/permission'
import { validateObjectId } from '~/lib/validate-object-id'
import { db } from '~/server/db'

import type { IPost, WithId } from '~/server/db/schema'

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
      _id: { $toString: '$_id' },
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
  return (await db()).collection<IPost>(DB_NAME).aggregate<WithId<IPost>>(AGGREGATION).toArray()
}

export async function getPost(post_id: string): Promise<WithId<IPost> | undefined> {
  const _id = validateObjectId([post_id], 'Invalid post ID')[0]

  const post = await (
    await db()
  )
    .collection<IPost>(DB_NAME)
    .aggregate<WithId<IPost>>([
      {
        $match: {
          _id,
        },
      },
      ...AGGREGATION,
    ])
    .next()

  if (post) {
    return post
  }
}

export async function addCommentToPost(post_id: string, comment: string) {
  const _id = validateObjectId([post_id], 'Invalid post ID')[0]
  const timestamp = moment().unix()

  return (await db()).collection<IPost>(DB_NAME).updateOne(
    {
      _id,
    },
    {
      $push: {
        comments: {
          _id: new ObjectId(),
          comment,
          created_on: timestamp,
        },
      },
    },
  )
}

export async function removeCommentFromPost(post_id: string, comment_id: string) {
  await checkPermissionToUpdate()

  const _id = validateObjectId([post_id], 'Invalid post ID')[0]
  const _comment_id = validateObjectId([post_id], 'Invalid comment ID')[0]

  return (await db()).collection<IPost>(DB_NAME).updateOne(
    {
      _id,
    },
    {
      $pull: {
        comments: {
          _id: _comment_id,
        },
      },
    },
  )
}

export async function addRatingToPost(post_id: string, rating: number) {
  const _id = validateObjectId([post_id], 'Invalid post ID')[0]
  const timestamp = moment().unix()

  return (await db()).collection<IPost>(DB_NAME).updateOne(
    {
      _id,
    },
    {
      $push: {
        ratings: {
          _id: new ObjectId(),
          rating,
          created_on: timestamp,
        },
      },
    },
  )
}

export async function removeRatingFromPost(post_id: string, rating_id: string) {
  await checkPermissionToUpdate()

  const _id = validateObjectId([post_id], 'Invalid post ID')[0]
  const _rating_id = validateObjectId([post_id], 'Invalid rating ID')[0]

  return (await db()).collection<IPost>(DB_NAME).updateOne(
    {
      _id,
    },
    {
      $pull: {
        ratings: {
          _id: _rating_id,
        },
      },
    },
  )
}

export async function insertPost(
  new_post: Pick<IPost, 'title' | 'image' | 'content' | 'excerpt'> & {
    authors: string[]
    categories?: string[]
  },
) {
  await checkPermissionToUpdate()

  const timestamp = moment().unix()
  const authors = validateObjectId(new_post.authors, 'Invalid author IDs')
  const categories = validateObjectId(new_post.categories, 'Invalid category IDs')

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

export async function updatePost(
  post_id: string,
  updated_post: Partial<
    Pick<IPost, 'title' | 'image' | 'content' | 'excerpt'> & {
      authors: string[]
      categories?: string[]
    }
  >,
) {
  await checkPermissionToUpdate()

  const _id = validateObjectId([post_id], 'Invalid post ID')[0]
  const authors = validateObjectId(updated_post.authors, 'Invalid author IDs')
  const categories = validateObjectId(updated_post.categories, 'Invalid category IDs')

  return (await db())
    .collection<
      Partial<
        Omit<IPost, 'authors' | 'categories'> & { authors: ObjectId[]; categories: ObjectId[] }
      >
    >(DB_NAME)
    .updateOne(
      {
        _id,
      },
      {
        $set: {
          ...updated_post,
          authors,
          categories,
          updated_on: moment().unix(),
        },
      },
    )
}
