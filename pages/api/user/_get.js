import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import token from '@utils/token'
import connectDB from '@utils/connectDB'
import User from '@models/user'

connectDB()

export default async function (req, res) {
  const jwtToken = req.headers['x-auth-token']

  if (!jwtToken) return res.status(500).json({ msg: 'No token. Authorization denied.' })

  try {
    const admins = await User.find()

    if (!admins) return res.status(404).json({ msg: 'Administrators not found.' })

    res.send(admins)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
