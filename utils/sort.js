import daysToGo from '@ui/utils/daysToGo'

const sort = (array, sortBy) => {
  if (!array.length || array == null) return []

  return array.sort((a, b) => {
    if (sortBy === 'uuemad enne') {
      if (daysToGo(a.createdAt) > daysToGo(b.createdAt)) return -1
    }

    if (sortBy === 'vanemad enne') {
      if (daysToGo(a.createdAt) < daysToGo(b.createdAt)) return -1
    }

    if (sortBy === 'az') {
      if (a.name < b.name) return -1
    }

    if (sortBy === 'za') {
      if (a.name > b.name) return -1
    }

    return 0
  })
}

export default sort
