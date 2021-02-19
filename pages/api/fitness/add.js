import connectDB from './../../../utils/connectDB'
import Fitness from './../../../models/fitness'

connectDB()

export default async function (req, res) {
  const { image, name, category, length, equipment, intro } = req.body

  if (!image || !name || !category || !length || !intro || !equipment) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  try {
    const workout = new Fitness(req.body)

    await workout.save()

    const fitness = await Fitness.find().sort({ createdAt: -1 })

    res.send(fitness)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
