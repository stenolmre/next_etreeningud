import jwt from 'jsonwebtoken'

import connectDB from '@utils/connectDB'
connectDB()

import User from '@models/user'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
import $post from '@utils/api/post'

export default async function (req, res) {
  const jwtToken = req.headers['x-auth-token']
  let id = null

  if (jwtToken != null) {
    const decoded = jwt.verify(jwtToken, process.env.JWT_KEY)
    id = decoded.id
  }

  switch (req.method) {
    case 'GET':
      if (!jwtToken) return res.status(500).json({ msg: 'No token. Authorization denied.' })
      return $get(req, res, User, id, 'User not found.')

    case 'POST':
      return $post(req, res, User, 'Workouts not found.')

    case 'PUT':
      return console.log('put func')

    case 'DELETE':
      return $delete(req, res, User, id, 'Workout could not be deleted - Not found.', 'Workouts not found.')
    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
