import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ConfigSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  fit: {
    categories: Array,
    images: Array,
    exercises: [
      {
        _id: {
          type: String,
          default: () => nanoid(5)
        },
        name: {
          type: String,
          required: true
        },
        gif: {
          type: String,
          required: true
        }
      }
    ]
  },
  blog: {
    categories: Array
  },
  landing: {
    title: String,
    subtitle: String,
  },
  writers: [
    {
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
      social: {
        type: String,
        required: true
      }
    }
  ]
})

const Config = mongoose.models.Config || mongoose.model('Config', ConfigSchema)

export default Config
