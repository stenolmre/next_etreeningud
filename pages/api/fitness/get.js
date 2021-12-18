import connectDB from '@ui/utils/connectDB'
connectDB()

import Fitnessv2 from '@models/fitnessv2'

export default async function get(req, res) {
  const { id } = req.query

  try {
    const workout = await Fitnessv2.findById(id)

    if (!workout) return res.status(404).json({ msg: 'Workout not found.' })

    res.send(workout)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
