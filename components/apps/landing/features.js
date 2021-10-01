import React, { useState } from 'react'

import Section from '@c/apps/landing/section'

const Fitness = () => {
  const [features] = useState([
    { title: 'Zero config', text: 'If you\'re new to Next.js we recommend that you start with the learn course.' },
    { title: 'Fast refresh', text: 'For more information on what to do next, we recommend..' },
    { title: 'API Routes', text: 'To start developing your application run npm run dev or yarn dev. ' }
  ])
  return <Section title={<span>We offer flexibility,<br/>so that no workout will be missed.</span>} subtitle="Miks eTreeningud?" button="Alusta täna" link="/fitness">
    {
      features.map(feature => <div key={feature.title} className="feature">
        <h4>{feature.title}</h4>
        <span>{feature.text}</span>
      </div>)
    }
  </Section>
}

export default Fitness
