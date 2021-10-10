const $post = async (req, res, Model, errorMessage, id, type = null) => {
  try {
    if (type != null && id != null) {
      const response = await Model.findById(id)
      if (response == null) return res.status(404).json({ msg: errorMessage })

      await response[type].push(req.body)
      await response.save()

      res.send(response)
    } else {
      const new_item = new Model(req.body)
      await new_item.save()

      const response = await Model.find().sort({ createdAt: -1 })
      if (response == null) return res.status(404).json({ msg: errorMessage })

      res.send(response)
    }
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export default $post
