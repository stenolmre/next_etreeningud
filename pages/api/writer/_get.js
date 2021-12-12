import connectDB from '@ui/utils/connectDB'
connectDB()

import WriterV2 from '@models/writerv2'

export default async function _get(req, res) {
  try {
    const writers = await WriterV2.find()

    if (!writers) return res.status(404).json({ msg: 'Writers not found.' })

    res.send(writers)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
