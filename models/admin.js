import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const AdminSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isOwner: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)

export default Admin
