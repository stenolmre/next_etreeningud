import { ObjectId } from 'mongodb'

import { db } from '~/server/db'

import type { IWorkout } from '~/server/db/schema'

const DB_NAME = 'workouts'

const AGGREGATION = [
  {
    $lookup: {
      from: 'workout_categories',
      localField: 'categories',
      foreignField: '_id',
      as: '__categories',
    },
  },
  {
    $lookup: {
      from: 'workout_equipments',
      localField: 'equipments',
      foreignField: '_id',
      as: '__equipments',
    },
  },
  {
    $lookup: {
      from: 'exercises',
      localField: 'warmup',
      foreignField: '_id',
      as: '__warmup',
    },
  },
  {
    $lookup: {
      from: 'exercises',
      localField: 'workout',
      foreignField: '_id',
      as: '__workout',
    },
  },
  {
    $lookup: {
      from: 'exercises',
      localField: 'cooldown',
      foreignField: '_id',
      as: '__cooldown',
    },
  },
  {
    $addFields: {
      categories: '$__categories',
      equipments: '$__equipments',
      warmup: '$__warmup',
      workout: '$__workout',
      cooldown: '$__cooldown',
    },
  },
  {
    $unset: '__categories',
  },
  {
    $unset: '__equipments',
  },
  {
    $unset: '__warmup',
  },
  {
    $unset: '__workout',
  },
  {
    $unset: '__cooldown',
  },
]

export async function getWorkouts() {
  return (await db()).collection<IWorkout>(DB_NAME).aggregate<IWorkout>(AGGREGATION).toArray()
}

export async function getWorkout(workout_id: string) {
  let _id: ObjectId
  try {
    _id = new ObjectId(workout_id)
  } catch {
    throw new Error('Invalid workout ID')
  }

  return (await db()).collection<IWorkout>(DB_NAME).aggregate<IWorkout>(AGGREGATION).next()
}
