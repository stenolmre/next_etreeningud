import type { ObjectId, WithId } from 'mongodb'

export interface IPost {
  image: string
  name: string
  content: string
  excerpt: string
  authors: WithId<IAuthor>[]
  categories?: WithId<IPostCategory>[]
  ratings?: {
    rating: number
  }[]
  comments?: {
    comment: string
  }[]
  created_on: number
  updated_on: number
}

export interface IPostCategory {
  label: 'tervis' | 'inimesed' | 'toitumine' | 'treening' | 'elustiil'
}

export interface IAuthor {
  image: string
  name: string
  bio: string
  social_links?: {
    _id: string
    link: string
    icon: string
  }[]
}

export interface IWorkout {
  _id: string
  image?: string
  name: string
  category: WithId<IWorkoutCategory>
  length: number
  equipment: WithId<IWorkoutEquipment>[]
  intro: string
  video?: string
  warmup?: WithId<IExercise>[]
  workout?: WithId<IExercise>[]
  cooldown?: WithId<IExercise>[]
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
  _id: string
  email: string
  name: string
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
