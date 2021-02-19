import connectDB from './../../../utils/connectDB'
import Complete from './../../../models/complete'

connectDB()

export default async function (req, res) {
  const { id } = req.body

  try {
    const complete_workout = await Complete.findById(id)

    if (!complete_workout) return res.status(404).json({ msg: 'Completed workout not found.' })

    await complete_workout.remove()

    const complete_workouts = await Complete.find().sort({ createdAt: -1 })

    if (!complete_workouts) return res.status(404).json({ msg: 'Completed workouts not found.' })

    res.send(complete_workouts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
