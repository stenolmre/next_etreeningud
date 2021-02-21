import connectDB from './../../../utils/connectDB'
import Settings from './../../../models/settings'

connectDB()

export default async function (req, res) {
  const { id } = req.query
  const { fit_images } = req.body

  let fields = {}
  if (fit_images) fields.fit_images = fit_images

  try {
    let edit_fit_settings = await Settings.findById(id)

    if (edit_fit_settings) {
      edit_fit_settings = await Settings.findOneAndUpdate({
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
