import connectDB from '@ui/utils/connectDB'
connectDB()

import Writer from '@models/writer'

export default async function get(req, res) {
  const { id } = req.query

  try {
    const writer = await Writer.findById(id)

    if (!writer) return res.status(404).json({ msg: 'Writer not found.' })

    res.send(writer)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
