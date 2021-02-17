import bcrypt from 'bcryptjs'

import token from './../../../utils/token'
import connectDB from './../../../utils/connectDB'
import Admin from './../../../models/admin'

import validateEmail from './../../../utils/validateemail'

connectDB()

export default async function (req, res) {
  const { email, password } = req.body

  if (!validateEmail(email) || !password || password.length < 6) return res.status(401).json({ msg: 'Invalid information.' })

  try {
    const admin = await Admin.findOne({ email })

    if (!admin) return res.status(404).json({ msg: 'Invalid information.' })

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) return res.status(401).json({ msg: 'Invalid information.' })

    res.json({
      status: 'success',
      token: token(admin._id),
      admin: admin
    })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
