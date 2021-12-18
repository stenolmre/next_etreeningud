import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const Fitnessv2Schema = mongoose.Schema({
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
  trainer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  equipment: Array,
  video: String,
  warmup: [{
    name: {
      type: String,
    },
    reps: {
      type: String,
    },
    gif: {
      type: String,
    }
  }],
  workout: [{
    name: {
      type: String,
    },
    reps: {
      type: String,
    },
    gif: {
      type: String,
    }
  }],
  cooldown: [{
    name: {
      type: String,
    },
    reps: {
      type: String,
    },
    gif: {
      type: String,
    }
  }]
}, {
  timestamps: true
})

const Fitnessv2 = mongoose.models.Fitnessv2 || mongoose.model('Fitnessv2', Fitnessv2Schema)

export default Fitnessv2
