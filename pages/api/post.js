import connectDB from '@utils/connectDB'
connectDB()

import Post from '@models/post'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
import $post from '@utils/api/post'
import $update from '@utils/api/update'

export default async function (req, res) {
  let id = req.query.id
  if (id == null) id = null

  let type = req.query.type
  if (type == null) type = null

  switch (req.method) {
    case 'GET':
      return $get(req, res, Post, id, 'Posts not found.')

    case 'POST':
      return $post(req, res, Post, 'Posts not found.', id, type)

    case 'PUT':
      let edited_fields = {}
      Object.entries(req.body).forEach(([key, value]) => {
        if (key) edited_fields[key] = value
      })
      return $update(req, res, Post, id, 'Oops. Treeningut ei leitud seega muutmine ebaõnnestus.', edited_fields)

    case 'DELETE':
      return $delete(req, res, Post, id, 'Post could not be deleted - Not found.', 'Posts not found.')
    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
