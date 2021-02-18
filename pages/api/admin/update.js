import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import connectDB from './../../../utils/connectDB'
import Admin from './../../../models/admin'

import validateEmail from './../../../utils/validateemail'

connectDB()

export default async function (req, res) {
  const jwtToken = req.headers['x-auth-token']

  if (!jwtToken) return res.status(500).json({ msg: 'No token. Authorization denied.' })

  const { name, email, password, isAdmin, isOwner } = req.body

  if (!name || !validateEmail(email) || !password || password.length < 6) return res.status(401).json({ msg: 'All fields are required.' })

  const salt = await bcrypt.genSalt(10)

  let fields = {}
  if (name) fields.name = name
  if (email) fields.email = email
  if (password) fields.password = await bcrypt.hash(password, salt)
  if (isAdmin) fields.isAdmin = isAdmin
  if (isOwner) fields.isOwner = isOwner

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_KEY)
    req.admin = decoded.id

    let update_admin = await Admin.findById(req.admin)

    if (update_admin) {
      update_admin = await Admin.findOneAndUpdate({
        _id: req.admin
      },{
        $set: fields
      }, {
        new: true
      })

      const admins = await Admin.find()

      return res.json({
        status: 'success',
        admin: update_admin,
        admins: admins
      })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
