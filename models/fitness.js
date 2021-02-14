import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const FitnessSchema = mongoose.Schema({
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
  video: {
    type: String,
  },
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

const Fitness = mongoose.models.Fitness || mongoose.model('Fitness', FitnessSchema)

export default Fitness
