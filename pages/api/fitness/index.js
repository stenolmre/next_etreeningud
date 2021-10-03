import connectDB from '@utils/connectDB'
connectDB()

import Fitness from '@models/fitness'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
import $post from '@utils/api/post'

export default async function (req, res) {
  let id
  id = req.query
  if (Object.keys(id).length === 0) id = null

  switch (req.method) {
    case 'GET':
      return $get(req, res, Fitness, id, 'Workouts not found.')

    case 'POST':
      return $post(req, res, Fitness, 'Workouts not found.')

    case 'PUT':
      return console.log('put func')

    case 'DELETE':
      return $delete(req, res, Fitness, id, 'Workout could not be deleted - Not found.', 'Workouts not found.')
    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
