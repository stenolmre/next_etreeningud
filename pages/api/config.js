import connectDB from '@ui/utils/connectDB'
connectDB()

import Config from '@models/config'

import $get from '@utils/api/get'
// import $delete from '@utils/api/delete'
import $post from '@utils/api/post'

export default async function (req, res) {
  let id
  id = req.query
  if (Object.keys(id).length === 0) id = null

  switch (req.method) {
    case 'GET':
      if (id != null) return $get(req, res, Config, id, 'Config not found.')
      return $get(req, res, Config, id, 'Config not found.')

    case 'POST':
      return $post(req, res, Config, 'Config not found.')

    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
