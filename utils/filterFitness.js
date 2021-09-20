export const filterFitness = (workouts, filterBy) => {
  return workouts.filter((workout, index) => {
    if (filterBy.type != null && filterBy.equipment != null) return workout.category.toLowerCase() === filterBy.type.toLowerCase() && workout.equipment.toLowerCase() === filterBy.equipment.toLowerCase()

    if (filterBy.type != null) return workout.category.toLowerCase() === filterBy.type.toLowerCase()

    if (filterBy.equipment != null) return workout.equipment.toLowerCase() === filterBy.equipment.toLowerCase()

    return workout
  })
}

export const sortFitness = (workouts, sortBy) => {
  return workouts.sort((a, b) => {
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
