import connectDB from '@ui/utils/connectDB'
connectDB()

import Settings from '@models/settings'

export default async function _get(req, res) {
  try {
    const settings = await Settings.find()

    if(!settings) return res.status(404).json({ msg: 'Settings not found.' })

    res.send(settings)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
