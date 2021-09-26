const filter = (array, condition) => {
  return array.filter((element, index) => {
    if (condition.type != null && condition.equipment != null) return element.category.toLowerCase() === condition.type.toLowerCase() && element.equipment.toLowerCase() === condition.equipment.toLowerCase()

    if (condition.type != null) return element.category.toLowerCase() === condition.type.toLowerCase()

    if (condition.equipment != null) return element.equipment.toLowerCase() === condition.equipment.toLowerCase()

    return element
  })
}

export default filter
