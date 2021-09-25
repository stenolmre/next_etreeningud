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

export default $post
