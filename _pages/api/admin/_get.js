import connectDB from './../../../utils/connectDB'
import Admin from './../../../models/admin'

export default async function (req, res) {
  await connectDB()
  const jwtToken = req.headers['x-auth-token']

  if (!jwtToken)
    return res.status(500).json({ msg: 'No token. Authorization denied.' })

  try {
    const admins = await Admin.find()

    if (!admins)
      return res.status(404).json({ msg: 'Administrators not found.' })

    res.send(admins)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
