import React from 'react'

import useFitness from '@hooks/useFitness'
import useEquipments from '@hooks/useEquipments'
import useTypes from '@hooks/useTypes'
import { useFitDispatch } from '@context/fitness'
import { addFitFilter, removeFitFilter } from '@actions/fitness'

import Sidebar from '@c/global/sidebar'

const FitnessSidebar = () => {
  const dispatchFit = useFitDispatch()
  const { filterBy, sortBy } = useFitness()

  return <Sidebar>
    <h4>Filter</h4>
    {
      Object.entries(sortBy).map(([key, value]) => <div key={key} className={sortBy[key] ? 'active' : ''} onClick={() => addFitFilter(dispatchFit, { [key]: true })}>{key}</div>)
    }
    <h4>Filter by workout type</h4>
    <All filter={filterBy.type} dispatchFit={dispatchFit}/>
    {
      useTypes().map(type => <div key={type} className={filterBy.type === type ? 'active' : ''} onClick={() => addFitFilter(dispatchFit, { type: type })}>{type}</div>)
    }
    <h4>Filter by equipment</h4>
    <All filter={filterBy.equipment} dispatchFit={dispatchFit}/>
    {
      useEquipments().map(equipment => <div key={equipment} className={filterBy.equipment === equipment ? 'active' : ''} onClick={() => addFitFilter(dispatchFit, { equipment })}>{equipment}</div>)
    }
  </Sidebar>
}

export default FitnessSidebar

const All = ({ filter, dispatchFit }) => <div className={filter === null ? 'active' : ''} onClick={() => addFitFilter(dispatchFit, { type: null })}>All</div>
