import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import connectDB from '@utils/connectDB'
connectDB()

import token from '@utils/token'
import isEmail from '@utils/isEmail'

import User from '@models/user'

export default async function (req, res) {
  const { name, email, password } = req.body
  let errors = {}

  if (name == null) errors['name'] = 'Name is required.'
  if (!isEmail(email)) errors['email'] = 'Email is not correct.'
  if (password.length < 6) errors['password'] = 'Password must be longer than 6 chars.'

  if (Object.keys(errors).length) return res.status(401).json({ error: errors })

  try {
    let isUser = await User.findOne({ email })
    if (isUser) return res.status(401).json({ msg: 'User already exists.' })

    const user = new User(req.body)

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    res.json({
      status: 'success',
      token: token(user._id),
      user
    })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
