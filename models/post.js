import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const PostSchema = mongoose.Schema({
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
  content: {
    type: Object,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  ratings: [
    {
      rating: {
        type: Number,
        required: true
      }
    }
  ],
  comments: [
    {
      comment: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
})

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

export default Post
