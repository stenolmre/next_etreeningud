import connectDB from '@utils/connectDB'
connectDB()

import Post from '@models/post'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
import $post from '@utils/api/post'

export default async function (req, res) {
  let id
  id = req.query
  if (Object.keys(id).length === 0) id = null

  switch (req.method) {
    case 'GET':
      if (id != null) return $get(req, res, Post, id, 'Post not found.')
      return $get(req, res, Post, id, 'Posts not found.')

    case 'POST':
      return $post(req, res, Post, 'Posts not found.')

    case 'PUT':
      return console.log('put func')

    case 'DELETE':
      return $delete(req, res, Post, id, 'Post could not be deleted - Not found.', 'Posts not found.')
    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
