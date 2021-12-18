import connectDB from '@ui/utils/connectDB'
connectDB()

import Postv2 from '@models/postv2'

export default async function _get(req, res) {
  try {
    const posts = await Postv2.find().sort({ createdAt: -1 })

    if (!posts) return res.status(404).json({ msg: 'Posts not found.' })

    res.send(posts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
