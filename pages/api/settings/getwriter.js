import connectDB from './../../../utils/connectDB'
import Settings from './../../../models/settings'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  try {
    const settings = await Settings.find()

    if(!settings) return res.status(404).json({ msg: 'Settings not found.' })

    const writers = settings[0].blog_writers

    const writer = writers.filter(el => el._id === id)

    if(!writer) return res.status(404).json({ msg: 'Writer not found.' })

    res.send(writer[0])
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
