import connectDB from '@ui/utils/connectDB'
connectDB()

import Post from '@models/post'

export default async function _delete(req, res) {
  const { id } = req.query

  try {
    const post = await Post.findById(id)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    await post.remove()

    const posts = await Post.find().sort({ createdAt: -1 })

    if (!posts) return res.status(404).json({ msg: 'Posts not found.' })

    res.send(posts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
