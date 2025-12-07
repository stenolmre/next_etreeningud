import { ObjectId } from 'mongodb'

export function validateObjectId(ids: string[], message: string): ObjectId[] {
  try {
    return ids.map(id => new ObjectId(id))
  } catch {
    throw new Error(message)
  }
}
