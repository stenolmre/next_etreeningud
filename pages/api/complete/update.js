import connectDB from './../../../utils/connectDB'
import Complete from './../../../models/complete'

connectDB()

export default async function (req, res) {
  const { id } = req.body

  const { workoutId, image, name, category, length, equipment, intro } = req.body

  if (!workoutId || !image || !name || !category || !length || !intro || !equipment) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  let fields = {}
  if (workoutId) fields.workoutId = workoutId
  if (image) fields.image = image
  if (name) fields.name = name
  if (category) fields.category = category
  if (length) fields.length = length
  if (intro) fields.intro = intro
  if (equipment) fields.equipment = equipment

  try {
    const update_workout = await Complete.findById(id)

    if (update_workout) {
      update_workout = await Complete.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const complete_workouts = await Complete.find()

      return res.json({
        workouts: complete_workouts,
        workout: update_workout
      })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
