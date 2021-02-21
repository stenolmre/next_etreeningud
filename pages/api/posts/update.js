import connectDB from './../../../utils/connectDB'
import Post from './../../../models/post'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const { image, name, content, category, excerpt, author } = req.body

  if (!image || !name || !content || !category || !excerpt || !author) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  let fields = {}
  if (image) fields.image = image
  if (name) fields.name = name
  if (content) fields.content = content
  if (category) fields.category = category
  if (excerpt) fields.excerpt = excerpt
  if (author) fields.author = author

  try {
    let edit_post = await Post.findById(id)

    if (edit_post) {
      edit_post = await Post.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const posts = await Post.find().sort({ createdAt: -1 })

      return res.json({
        posts: posts,
        post: edit_post
      })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
