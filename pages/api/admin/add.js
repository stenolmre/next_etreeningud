import bcrypt from 'bcryptjs'

import connectDB from './../../../utils/connectDB'
import Admin from './../../../models/admin'

import validateEmail from './../../../utils/validateemail'

export default async function (req, res) {
  await connectDB()
  const jwtToken = req.headers['x-auth-token']

  if (!jwtToken)
    return res.status(500).json({ msg: 'No token. Authorization denied.' })

  const { name, email, password } = req.body

  if (!name || !validateEmail(email))
    return res.status(401).json({ msg: 'Name and Email are required.' })
  if (!password || password.length < 6)
    return res
      .status(401)
      .json({ msg: 'Password must be 6 or more characters long.' })

  try {
    const admin = await Admin.findOne({ email })

    if (admin) return res.status(401).json({ msg: 'User already exists.' })

    const newAdmin = new Admin(req.body)

    const salt = await bcrypt.genSalt(10)
    newAdmin.password = await bcrypt.hash(password, salt)

    await newAdmin.save()

    const admins = await Admin.find()

    res.json({
      status: 'success',
      admins: admins,
    })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
