import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const CompleteSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  workoutId: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  equipment: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  video: String,
  {
  timestamps: true
})

const Complete = mongoose.models.Complete || mongoose.model('Complete', CompleteSchema)

export default Complete
