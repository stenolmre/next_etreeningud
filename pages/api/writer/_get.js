import connectDB from './../../../utils/connectDB'
import Writer from './../../../models/writer'

connectDB()

export default async function (req, res) {
  try {
    const writers = await Writer.find()

    if (!writers) return res.status(404).json({ msg: 'Writers not found.' })

    res.send(writers)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
