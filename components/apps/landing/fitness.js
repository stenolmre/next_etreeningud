import React, { useEffect } from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { getWorkouts } from '@actions/fitness'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card'

const Fitness = () => {
  const dispatchFit = useFitDispatch()
  const { fitness } = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  return <Section title="Working out can be enjoyable." subtitle="Latest workouts" button="All workouts" link="/fitness">
    {
      fitness
        ? fitness.map(workout => <Card
            key={workout._id}
            image={workout.image}
            category={workout.category}
            equipment={workout.equipment}
            title={workout.name}
            info={workout.intro}
            icon="fas fa-heartbeat"
            date={workout.createdAt.slice(0, 10).replaceAll('-', '/')}
          />).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Fitness
