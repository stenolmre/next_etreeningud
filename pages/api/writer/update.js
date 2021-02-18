import connectDB from './../../../utils/connectDB'
import Writer from './../../../models/writer'

connectDB()

export default async function (req, res) {
  const { id } = req.query

  const { image, name, bio, social_links } = req.body

  if (!image || !name || !bio ) return res.status(401).json({ msg: 'Please fill all fields with correct information.' })

  let fields = {}
  if (image) fields.image = image
  if (name) fields.name = name
  if (bio) fields.bio = bio
  if (social_links) fields.social_links = social_links

  try {
    let update_writer = await Writer.findById(id)

    if (update_writer) {
      update_writer = await Writer.findOneAndUpdate({
        _id: id
      },{
        $set: fields
      }, {
        new: true
      })

      const writers = await Writer.find()

      return res.json({
        writers: writers,
        writer: update_writer
      })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
