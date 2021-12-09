import React, { useEffect } from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { getWorkouts } from '@actions/fitness'

const useFitness = () => {
  const dispatch = useFitDispatch()
  const { fitness } = useFitState()

  useEffect(() => {
    if (fitness == null || !fitness.length) getWorkouts(dispatch)
  }, [dispatch])

  return fitness
}

export default useFitness
