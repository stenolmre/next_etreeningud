import React, { useEffect } from 'react'
import { useFitState } from '@context/fitness'

const useFitnessFilters = () => {
  const { fitness } = useFitState()
  
  let types = {}
  let equipments = {}
  
  fitness && fitness.map(workout => workout.category).forEach(type => {
    if (!types.hasOwnProperty(type)) types[type] = 0
    return types[type] = types[type] + 1
  })
  
  fitness && fitness.map(workout => workout.equipment).forEach(equipment => {
    if (!equipments.hasOwnProperty(equipment)) equipments[equipment] = 0
    return equipments[equipment] = equipments[equipment] + 1
  })
  
  return { types, equipments }
}

export default useFitnessFilters
