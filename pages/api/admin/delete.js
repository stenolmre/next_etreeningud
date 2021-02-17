import connectDB from './../../../utils/connectDB'
import Admin from './../../../models/admin'

connectDB()

export default async function (req, res) {
  const jwtToken = req.headers['x-auth-token']

  if (!jwtToken) return res.status(500).json({ msg: 'No token. Authorization denied.' })

  const { id } = req.query

  try {
    const admin = await Admin.findByd(id)

    if (!admin) return res.status(401).json({ msg: 'Admin not found.' })

    await admin.remove()

    const admins = await Admin.find()

    res.send(admins)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
