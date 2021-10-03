import connectDB from '@utils/connectDB'
connectDB()

import Config from '@models/config'

import $get from '@utils/api/get'
import $delete from '@utils/api/delete'
// import $post from '@utils/api/post'

const $post = async (req, res, Model, errorMessage) => {
  try {
    const new_item = new Model(req.body)
    await new_item.save()

    const response = await Model.find().sort({ createdAt: -1 })
    if (response == null) return res.status(404).json({ msg: errorMessage })

    res.send(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

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
