import connectDB from '@utils/connectDB'
import WriterV2 from '@models/writerv2'

connectDB()

export default async function (req, res) {
  try {
    const writers = await WriterV2.find()

    if (!writers) return res.status(404).json({ msg: 'Writers not found.' })

    res.send(writers)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
