const sort = (array, sortBy) => {
  return array.sort((a, b) => {
    if (sortBy.AZ) {
      if(a.title < b.title) return -1
      if(a.title > b.title) return 1
      return 0
    }

    if (sortBy.ZA) {
      if(a.title > b.title) return -1
      if(a.title < b.title) return 1
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
