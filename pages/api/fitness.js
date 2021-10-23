import connectDB from '@ui/utils/connectDB'
connectDB()

import Fitness from '@models/fitness'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
import $post from '@utils/api/post'
import $update from '@utils/api/update'

export default async function (req, res) {
  let id
  id = req.query.id
  if (id == null) id = null

  switch (req.method) {
    case 'GET':
      const errorMessage = id ? 'Oops. Treeningut ei leitud.' : 'Oops. Treeninguid ei leitud.'
      return $get(req, res, Fitness, id, errorMessage)

    case 'POST':
      return $post(req, res, Fitness, 'Oops. Treeninguid ei leitud.')

    case 'PUT':
      let edited_fields = {}
      Object.entries(req.body).forEach(([key, value]) => {
        if (key) edited_fields[key] = value
      })
      return $update(req, res, Fitness, id, 'Oops. Treeningut ei leitud seega muutmine ebaõnnestus.', edited_fields)

    case 'DELETE':
      return $delete(req, res, Fitness, id, 'Oops. Treeningut ei leitud seega kustutamine ebaõnnestus.', 'Oops. Treeninguid ei leitud.')
    default:
      return res.status(500).json({ msg: 'Server Error' })
  }
}
