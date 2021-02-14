import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const SettingsSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  fit_exercises: [
    {
      _id: {
        type: String,
        default: () => nanoid(5)
      },
      fit_exercises_name: {
        type: String,
        required: true
      },
      fit_exercises_gif: {
        type: String,
        required: true
      }
    }
  ],
  fit_categories: Array,
  fit_equipment: Array,
  social: [
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
  ],
  blog_writers: [
    {
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
          social_link: {
            type: String,
            required: true
          },
          social_icon: {
            type: String,
            required: true
          }
        }
      ]
    }
  ],
  features: [
    {
      _id: {
        type: String,
        default: () => nanoid(5)
      },
      feature_name: {
        type: String,
        required: true
      },
      feature_info: {
        type: String,
        required: true
      }
    }
  ]
})

const Settings = mongoose.models.Settings || mongoose.model('Settings', SettingsSchema)

export default Settings
