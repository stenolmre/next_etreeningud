import React, { useEffect } from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { getWorkouts } from '@actions/fitness'

const useTypes = () => {
  const dispatchFit = useFitDispatch()
  const { fitness } = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  let types = {}

  fitness && fitness.map(workout => workout.category).forEach(type => {
    if (!types.hasOwnProperty(type)) types[type] = 0
    return types[type] = types[type] + 1
  })

  return Object.keys(Object.fromEntries(Object.entries(types).sort((a,b) => b[1] - a[1])))
}

export default useTypes
