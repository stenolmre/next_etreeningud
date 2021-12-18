import connectDB from '@ui/utils/connectDB'
connectDB()

import Postv2 from '@models/postv2'

export default async function get(req, res) {
  const { id } = req.query

  try {
    const post = await Postv2.findById(id)

    if (!post) return res.status(404).json({ msg: 'Post not found.' })

    res.send(post)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
