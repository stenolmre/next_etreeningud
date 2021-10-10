import React from 'react'

import breakSentence from '@utils/breakSentence'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'

const Fitness = () => {
  const { features, landing } = useConfigState()

  return <Section title={ breakSentence(landing.sections.features.title) } subtitle={ landing.sections.features.subtitle } button={ landing.sections.features.button.title } link={ landing.sections.features.button.link }>
    {
      features && features.map(feature => <div key={ feature.title } className="feature">
        <h4>{ feature.title }</h4>
        <span>{ feature.body }</span>
      </div>)
    }
  </Section>
}

export default Fitness
