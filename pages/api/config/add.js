import connectDB from '@ui/utils/connectDB'
connectDB()

import Config from '@models/config'

export default async function add(req, res) {
  try {
    const config = new Config(req.body)
    await config.save()

    const _config = await Config.find()
    res.send(_config)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
