import connectDB from '@utils/connectDB'
import WriterV2 from '@models/writerv2'

connectDB()

export default async function (req, res) {
  try {
    await WriterV2.insertMany(req.body)

    const response = await WriterV2.find()

    res.send(response)
  } catch (e) {
    res.send(e)
  }
}
