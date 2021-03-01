import React from 'react'

const histogram = iterable => {
  const result = new Map()

  for (const x of iterable) {
    result.set(x, (result.get(x) || 0) + 1)
  }

  return result
}

const mostPopular = iterable => {
  let maxCount = 0
  let maxKey

  for (const [key, count] of histogram(iterable)) {
    if (count > maxCount) {
      maxCount = count
      maxKey = key
    }
  }

  return maxKey
}

export default mostPopular
