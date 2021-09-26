import React, { useEffect } from 'react'

import { useFitState } from '@context/fitness'

const useTypes = () => {
  const { fitness } = useFitState()
  let types = {}

  fitness && fitness.map(workout => workout.category).forEach(type => {
    if (!types.hasOwnProperty(type)) types[type] = 0
    return types[type] = types[type] + 1
  })

  return Object.keys(Object.fromEntries(Object.entries(types).sort((a,b) => b[1] - a[1])))
}

export default useTypes
