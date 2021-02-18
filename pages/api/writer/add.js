import connectDB from './../../../utils/connectDB'
import Writer from './../../../models/writer'

connectDB()

export default async function (req, res) {
  const { image, name, bio } = req.body

  if (!image || !name || !bio) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const writer = new Writer(req.body)

    await writer.save()

    const writers = await Writer.find()

    res.send(writers)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
