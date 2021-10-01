import React, { useEffect } from 'react'

import sort from '@utils/sort'
import filter from '@utils/filter'

import Card from '@c/global/card'

const Fitness = ({ fitness, filterBy, sortBy }) => {
  return <div className="page_container">
    <div className="page">
      {
        fitness && sort(filter(fitness, filterBy), sortBy).map(workout => <Card
          key={workout._id}
          id={workout._id}
          image={workout.image}
          category={workout.category}
          equipment={workout.equipment}
          title={workout.name}
          time={workout.length}
        />)
      }
    </div>
  </div>
}

export default Fitness
