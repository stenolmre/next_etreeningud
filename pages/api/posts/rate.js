import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { rating } = req.body

  if (!rating) return res.status(401).json({ msg: 'Rating is required.' })

  try {
    const post = await Post.findById(id)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    await post.ratings.unshift(req.body)

    await post.save()

    res.send(post.ratings)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
