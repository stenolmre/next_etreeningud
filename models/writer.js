import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const WriterSchema = mongoose.Schema({
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
  bio: {
    type: String,
    required: true
  },
  social_links: [
    {
      _id: {
        type: String,
        default: () => nanoid(5)
      },
      link: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
})

const Writer = mongoose.models.Writer || mongoose.model('Writer', WriterSchema)

export default Writer
