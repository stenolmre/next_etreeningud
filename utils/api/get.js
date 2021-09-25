const $get = async (req, res, Model, id, errorMessage) => {
  try {
    let response
    if (id != null) {
      response = await Model.findById(id)
    } else {
      response = await Model.find().sort({ createdAt: -1 })
    }

    if (response == null) return res.status(404).json({ msg: errorMessage })

    res.send(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export default $get
