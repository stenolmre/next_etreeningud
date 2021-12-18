import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const AnalyticSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  id: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Analytic = mongoose.models.Analytic || mongoose.model('Analytic', AnalyticSchema)

export default Analytic
