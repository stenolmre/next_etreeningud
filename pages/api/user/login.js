import bcrypt from 'bcryptjs'

import connectDB from '@utils/connectDB'
connectDB()

import token from '@utils/token'
import isEmail from '@utils/isEmail'

import User from '@models/user'

export default async function (req, res) {
  const { email, password } = req.body

  if (!isEmail(email) || !password || password.length < 6) return res.status(401).json({ msg: 'Ebakorrektsed kasutajatunnused.' })

  try {
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ msg: 'Ebakorrektsed kasutajatunnused.' })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(401).json({ msg: 'Ebakorrektsed kasutajatunnused.' })

    res.json({
      status: 'success',
      token: token(user._id),
      user: user
    })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
