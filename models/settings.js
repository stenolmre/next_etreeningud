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
  fit_images: Array,
  fit_ending_messages: {
    fit_ending_upper_message: String,
    fit_ending_lower_message: String,
  },
  blog_categories: Array,
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
  ],
  landing: {
    landing_title: String,
    landing_subtitle: String,
    landing_watermark: String,
    landing_button_text: String,
    landing_button_link: String,
    landing_image: String,
    landing_video_heading: String,
    landing_video_subheading: String,
    landing_contact_heading: String,
    landing_contact_subheading: String
  }
})

const Settings = mongoose.models.Settings || mongoose.model('Settings', SettingsSchema)

export default Settings
