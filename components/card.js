import React from 'react'
import Link from 'next/link'

import { getDate } from '@ui/utils/date'
import generateLink from '@utils/generateLink'

const MainCard = ({ data, events = true, blog = true }) => {
  return <Link href={generateLink(data, blog)}><a className={`card ${!events ? 'no_events': ''}`}>
    <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>
    <div className="content">
      <h3>{data.name}</h3>
      <div className="card_hashtags">
        <span>#{data.category.toLowerCase()}</span>
      </div>
    </div>
    <div className="card_footer">
      <div className="card_author"/>
      <div className="content">
        <h5>Kiyoko Yoshi</h5>
        <h5>{getDate(data.createdAt, 'est')}</h5>
      </div>
    </div>
    <div className="card_category" />
  </a></Link>
}

const LgCard = ({ image }) => {
  return <div className="postcard_main" style={{ backgroundImage: `url(${image})`}}>
    <span>Kiyoko Yoshi</span>
    <h2>How to make morning coffee, according to the Science</h2>
    <small>#tervis</small>
    <small>31 jaan 2022</small>
  </div>
}

const SmCard = ({ image }) => {
  return <div className="postcard_sm">
    <div className="image" style={{ backgroundImage: `url(${image})`}}/>
    <section>
      <h4>Moving is good, even if you just walk around the city.</h4>
      <div>
        <span>Kiyoko Yoshi</span>
        <span>#eluviis</span>
      </div>
    </section>
    <i className="fas fa-chevron-right" />
  </div>
}

export { MainCard, LgCard, SmCard }
