const mostPopular = (arr = []) => {
  let item = arr[0]
  let ocurrencesMap = {}

  for (let i in arr) {
    const current = arr[i]

    if (ocurrencesMap[current]) ocurrencesMap[current]++
    else ocurrencesMap[current] = 1

    if (ocurrencesMap[item] < ocurrencesMap[current]) item = current
  }

//   return { item, ocurrences: ocurrencesMap[item] };
  return item
}

export default mostPopular
