import type { ObjectId, WithId as MongooseWithId } from 'mongodb'

export type WithId<T> = T & {
  _id: string
}

export interface IPost {
  title: string
  image?: string
  content: string
  excerpt: string
  authors: MongooseWithId<IAuthor>[]
  categories: MongooseWithId<IPostCategory>[]
  ratings?: MongooseWithId<{
    rating: number
    created_on: number
  }>[]
  comments?: MongooseWithId<{
    comment: string
    created_on: number
  }>[]
  created_on: number
  updated_on: number
}

export interface IPostCategory {
  label: string
}

export interface IAuthor {
  image: string
  name: string
  bio: string
  social_links?: {
    link: string
    icon: string
  }[]
}

export interface IWorkout {
  _id: string
  image?: string
  name: string
  categories: MongooseWithId<IWorkoutCategory>[]
  length: number
  equipments: MongooseWithId<IWorkoutEquipment>[]
  intro: string
  video?: string
  warmup?: MongooseWithId<IExercise>[]
  workout?: MongooseWithId<IExercise>[]
  cooldown?: MongooseWithId<IExercise>[]
  created_on: number
  updated_on: number
}

export interface IWorkoutEquipment {
  label: 'hantlid' | 'joogamatt' | 'kummiloop' | 'treeningmatt'
}

export interface IWorkoutCategory {
  label: 'strength' | 'hiit' | 'yoga'
}

export interface IExercise {
  name: string
  reps: string
  gif: string
  pair?: ObjectId
  type: 'warmup' | 'workout' | 'cooldown'
  category: 'upper' | 'lower' | 'hiit' | 'abs' | 'all'
}

export interface IUser {
  email: string
  name: string
  image?: string
  permissions: number
  created_on: number
  updated_on: number
}

export interface IAppConfig {
  social?: {
    icon: string
    link: string
  }[]
  features?: {
    label: string
    description: string
  }[]
  landing?: {
    title?: string
    subtitle?: string
    watermark?: string
    button_text?: string
    button_link?: string
    image?: string
    video?: {
      heading: string
      subheading: string
    }
    contact?: {
      heading: string
      subheading: string
    }
  }
  workout?: {
    end?: {
      title: string
      message: string
    }
  }
}
