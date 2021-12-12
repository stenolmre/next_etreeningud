import connectDB from '@ui/utils/connectDB'
connectDB()

import Settings from '@models/settings'

export default async function add(req, res) {
  try {
    const settings = new Settings(req.body)

    await settings.save()

    res.send(settings)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
