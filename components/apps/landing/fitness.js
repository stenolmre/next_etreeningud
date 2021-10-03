import React, { useEffect } from 'react'

import useFitness from '@hooks/useFitness'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card'

const Fitness = () => {
  const { fitness } = useFitness()

  return <Section title="Working out can be enjoyable." subtitle="Uusimad treeningud" button="Treeningud" link="/fitness">
    {
      fitness
        ? fitness.map(workout => <Card
            key={workout._id}
            image={workout.image}
            category={workout.category}
            equipment={workout.equipment}
            title={workout.name}
            time={workout.length}
          />).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Fitness
