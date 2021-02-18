import connectDB from './../../../utils/connectDB'
import Settings from './../../../models/settings'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { fit_exercises } = req.body

  let fields = {}
  if (fit_exercises) fields.fit_exercises = fit_exercises

  try {
    let edit_exercises_settings = await Settings.findById(id)

    if (edit_exercises_settings) {
      edit_exercises_settings = await Settings.findOneAndUpdate({
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
