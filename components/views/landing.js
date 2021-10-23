import React from 'react'
import Link from 'next/link'

import { useConfigState } from '@context/config'
import breakSentence from '@ui/utils/breakSentence'

import Dots from '@c/global/dots'

const Landing = () => {
  const { landing } = useConfigState()

  return <div className="landing">
    <Dots num="20" className="landing_top_dots"/>
    <section>
      <h1 dangerouslySetInnerHTML={breakSentence(landing.title)}/>
      <span>{ landing.subtitle }</span>
      <Link href={landing.button.link}>
        <a className="btn">
          <i className="fas fa-rocket icon"/>
          <span>{landing.button.title}</span>
        </a>
      </Link>
    </section>
    <div className="landing_video">
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m6C-QodHeus" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    <Dots num="100" className="landing_bottom_dots"/>
  </div>
}

export default Landing
