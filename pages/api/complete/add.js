import connectDB from './../../../utils/connectDB'
import Complete from './../../../models/complete'

connectDB()

export default async function (req, res) {
  const { workoutId, image, name, category, length, equipment, intro } = req.body

  if (!workoutId || !image || !name || !category || !length || !intro || !equipment) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const complete_workout = new Complete(req.body)

    await complete_workout.save()

    const complete_workouts = await Complete.find().sort({ createdAt: -1 })

    res.send(complete_workouts)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
