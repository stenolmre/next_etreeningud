import connectDB from '@ui/utils/connectDB'
connectDB()

import Config from '@models/config'

export default async function _get(req, res) {
  try {
    const _config = await Config.find()
    res.send(_config[0])
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
