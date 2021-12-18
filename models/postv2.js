import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const Postv2Schema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Postv2 = mongoose.models.Postv2 || mongoose.model('Postv2', Postv2Schema)

export default Postv2
