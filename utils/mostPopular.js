const mostPopular = (arr = []) => {
  return arr.sort((a, b) => arr.filter(element => element === a).length - arr.filter(element => element === b).length).pop()
}

export default mostPopular
