import React, { useEffect } from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { getWorkouts } from '@actions/fitness'

const useEquipments = () => {
  const dispatchFit = useFitDispatch()
  const fitness = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  return fitness
}

export default useEquipments
