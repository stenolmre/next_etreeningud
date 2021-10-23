import React from 'react'

import breakSentence from '@ui/utils/breakSentence'
import useFitness from '@hooks/useFitness'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card'

const Fitness = () => {
  const { fitness } = useFitness()
  const { landing } = useConfigState()

  return <Section title={ breakSentence(landing.sections.fitness.title) } subtitle={ landing.sections.fitness.subtitle } button={ landing.sections.fitness.button.title } link={ landing.sections.fitness.button.link }>
    {
      fitness
        ? fitness.map(workout => <Card
          key={ workout._id }
          image={ workout.image }
          category={ workout.category }
          equipment={ workout.equipment }
          title={ workout.name }
          time={ workout.length }
        />).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Fitness
