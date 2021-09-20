import React, { useEffect } from 'react'

import useFitness from '@hooks/useFitness'
import { filterFitness, sortFitness } from '@utils/filterFitness'

import Card from '@c/global/card'

const Fitness = () => {
  const { fitness, filterBy, sortBy } = useFitness()

  return <div className="page_container">
    <h1>Fitness</h1>
    <div className="page">
      {
        fitness && sortFitness(filterFitness(fitness, filterBy), sortBy).map(workout => <Card
          key={workout._id}
          image={workout.image}
          category={workout.category}
          equipment={workout.equipment}
          title={workout.name}
          info={workout.length + 'min'}
          icon="fas fa-heartbeat"
          date={workout.createdAt}
        />)
      }
    </div>
  </div>
}

export default Fitness
