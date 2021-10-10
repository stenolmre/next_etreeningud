const $update = async (req, res, Model, id, errorMessage, edited_fields) => {
  try {
    let response = await Model.findById(id)

    if (response != null) response = await Model.findOneAndUpdate({ _id: id }, { $set: edited_fields }, { new: true })
    else return res.status(404).json({ msg: errorMessage })

    let all_items = await Model.find().sort({ craetedAt: -1 })

    return res.json({ response, all_items })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export default $update
