import connectDB from './../../../utils/connectDB'
import Settings from './../../../models/settings'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { fit_categories, fit_equipment } = req.body

  let fields = {}
  if (fit_categories) fields.fit_categories = fit_categories
  if (fit_equipment) fields.fit_equipment = fit_equipment

  try {
    let edit_workout_settings = await Settings.findById(id)

    if (edit_workout_settings) {
      edit_workout_settings = await Settings.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const settings = await Settings.find()

      return res.send(settings)
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
