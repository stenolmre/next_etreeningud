import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const ConfigSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  blog: {
    categories: Array,
    authors: [{
      _id: {
        type: String,
        default: () => nanoid(5)
      },
      name: {
        type: String,
        required: true
      },
      bio: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      social: [{
        _id: {
          type: String,
          default: () => nanoid(5)
        },
        icon: {
          type: String,
          required: true
        },
        link: {
          type: String,
          required: true
        }
      }]
    }]
  },
  fitness: {
    categories: Array,
    equipment: Array,
    images: Array,
    exercises: [{
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
    }]
  },
  social: [{
    _id: {
      type: String,
      default: () => nanoid(5)
    },
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }],
  features: [{
    _id: {
      type: String,
      default: () => nanoid(5)
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }],
  landing: {
    title: String,
    subtitle: String,
    sections: {
      fitness: {
        title: String,
        subtitle: String,
        button: {
          title: String,
          link: String
        }
      },
      features: {
        title: String,
        subtitle: String,
        button: {
          title: String,
          link: String
        }
      },
      blog: {
        title: String,
        subtitle: String,
        button: {
          title: String,
          link: String
        }
      }
    },
    button: {
      title: String,
      link: String
    },
    media: String
  }
})

const Config = mongoose.models.Config || mongoose.model('Config', ConfigSchema)

export default Config
