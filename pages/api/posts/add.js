import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { image, name, content, category, excerpt, author } = req.body

  if (!image || !name || !content || !category || !excerpt || !author) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const post = new Post(req.body)

    await post.save()

    const posts = await Posts.find().sort({ createdAt: -1 })

    res.send(posts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
