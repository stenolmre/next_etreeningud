import React, { useEffect } from 'react'

import { useFitState } from '@context/fitness'

const useEquipments = () => {
  const { fitness } = useFitState()
  let equipments = {}

  fitness && fitness.map(workout => workout.equipment).forEach(equipment => {
    if (!equipments.hasOwnProperty(equipment)) equipments[equipment] = 0
    return equipments[equipment] = equipments[equipment] + 1
  })

  return Object.keys(Object.fromEntries(Object.entries(equipments).sort((a, b) => b[1] - a[1])))
}

export default useEquipments
