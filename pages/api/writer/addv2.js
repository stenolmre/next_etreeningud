import connectDB from '@ui/utils/connectDB'
connectDB()

import WriterV2 from '@models/writerv2'

export default async function addv2(req, res) {
  try {
    await WriterV2.insertMany(req.body)

    const response = await WriterV2.find()

    res.send(response)
  } catch (e) {
    res.send(e)
  }
}
