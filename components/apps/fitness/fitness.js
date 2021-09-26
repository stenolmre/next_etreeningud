import React, { useEffect } from 'react'

import sort from '@utils/sort'
import filter from '@utils/filter'

import Card from '@c/global/card'

const Fitness = ({ fitness, filterBy, sortBy }) => {
  return <div className="page_container">
    <h1>Fitness</h1>
    <div className="page">
      {
        fitness && sort(filter(fitness, filterBy), sortBy).map(workout => <Card
          key={workout._id}
          image={workout.image}
          category={workout.category}
          equipment={workout.equipment}
          title={workout.name}
          info={workout.length + ' min'}
          icon="fas fa-heartbeat"
          date={workout.createdAt}
        />)
      }
    </div>
  </div>
}

export default Fitness
