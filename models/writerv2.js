import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const WriterV2Schema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  social: String
}, {
  timestamps: true
})

const WriterV2 = mongoose.models.WriterV2 || mongoose.model('WriterV2', WriterV2Schema)

export default WriterV2
