import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const post = await Post.findById(id)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
