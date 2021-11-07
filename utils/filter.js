const filter = (array, condition) => {
  return array.filter((element, index) => {
    if (condition.type != null && condition.equipment != null && condition.category != null && condition.author != null) return element.category.toLowerCase() === condition.type.toLowerCase() && element.equipment.toLowerCase() === condition.equipment.toLowerCase()

    if (condition.type != null) return element.category.toLowerCase() === condition.type.toLowerCase()

    if (condition.equipment != null) return element.equipment.toLowerCase() === condition.equipment.toLowerCase()

    if (condition.category != null && condition.author != null) return element.category.toLowerCase() === condition.category.toLowerCase() && element.author.toLowerCase() === condition.author.toLowerCase()

    if (condition.category != null) return element.category.toLowerCase() === condition.category.toLowerCase()

    if (condition.author != null) return element.author.toLowerCase() === condition.author.toLowerCase()

    return element
  })
}

export default filter
