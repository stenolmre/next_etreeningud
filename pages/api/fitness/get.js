import connectDB from '@ui/utils/connectDB'
connectDB()

import Fitness from '@models/fitness'

export default async function get(req, res) {
  const { id } = req.query

  try {
    const workout = await Fitness.findById(id)

    if (!workout) return res.status(404).json({ msg: 'Workout not found.' })

    res.send(workout)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
