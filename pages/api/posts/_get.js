import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })

    if (!posts) return res.status(404).json({ msg: 'Posts not found.' })

    res.send(posts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
