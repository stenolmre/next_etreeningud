import connectDB from '@ui/utils/connectDB'
connectDB()

import Fitnessv2 from '@models/fitnessv2'

export default async function _get(req, res) {
  try {
    const fitness = await Fitnessv2.find().sort({ createdAt: -1 })

    if (!fitness) return res.status(404).json({ msg: 'Workouts not found.' })

    res.send(fitness)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
