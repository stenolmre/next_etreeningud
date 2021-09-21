const sort = (array, sortBy) => {
  return array.sort((a, b) => {
    if (sortBy.AZ) {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0
    }

    if (sortBy.ZA) {
      if(a.name > b.name) return -1
      if(a.name < b.name) return 1
      return 0
    }

    if (sortBy.Latest) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortBy.Oldest) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  })
}

export default sort
