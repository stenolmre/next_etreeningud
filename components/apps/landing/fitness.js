import React from 'react'

import breakSentence from '@ui/utils/breakSentence'
// import useFitness from '@hooks/useFitness'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card/fitness'

const Fitness = () => {
  // const { fitness } = useFitness()
  const { landing } = useConfigState()

  const fitness = [{
    _id: 'asd',
    image: 'https://images.pexels.com/photos/1302925/pexels-photo-1302925.jpeg?auto=compress&cs=tinysrgb&dpr=1',
    name: 'Lower body full attack',
    equipment: 'Joogamatt',
    category: 'Jooga',
    length: 32
  },{
    _id: 'asd1',
    image: 'https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&dpr=1',
    name: 'Lower body full attack to be greater than usual.',
    category: 'jõud',
    equipment: 'hantlid & kummiloop',
    length: 3
  },{
    _id: 'asd2',
    image: 'https://images.pexels.com/photos/1089147/pexels-photo-1089147.jpeg?auto=compress&cs=tinysrgb&dpr=1',
    name: 'You can do it.',
    category: 'HIIT',
    equipment: 'treeningmatt',
    length: 5
  },{
    _id: 'as2d',
    image: 'https://images.pexels.com/photos/1302925/pexels-photo-1302925.jpeg?auto=compress&cs=tinysrgb&dpr=1',
    name: 'Lower body full attack',
    equipment: 'Joogamatt',
    category: 'Jooga',
    length: 32
  }]

  return <Section title={ breakSentence(landing.sections.fitness.title) } subtitle={ landing.sections.fitness.subtitle } button={ landing.sections.fitness.button.title } link={ landing.sections.fitness.button.link } icon="fas fa-heartbeat">
    {
      fitness
        ? fitness.map(workout => <Card
          key={ workout._id }
          image={ workout.image }
          category={ workout.category }
          equipment={ workout.equipment }
          title={ workout.name }
          time={ workout.length }
        />).slice(0, 4)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Fitness
