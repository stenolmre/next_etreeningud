const $delete = async (req, res, Model, id, errorMessage, errorMessage2) => {
  try {
    const item = await Model.findById(id)

    if (item == null) return res.status(404).json({ msg: errorMessage })

    await item.remove()

    const response = await Model.find().sort({ createdAt: -1 })

    if (response == null) return res.status(404).json({ msg: errorMessage2 })

    res.send(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export default $delete
