import connectDB from '@ui/utils/connectDB'
connectDB()

import Post from '@models/post'

export default async function get(req, res) {
  const { id } = req.query

  try {
    const post = await Post.findById(id)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
