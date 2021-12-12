import React from 'react'
import Link from 'next/link'

import { getDate } from '@ui/utils/date'

const Card = ({ data, events = true, blog = true }) => {
  const generateLink = () => {
    if (data.category === 'jooga') return window.location.origin + '/yoga/' + data._id
    if (blog) return '/posts/' + data._id
    return '/fitness/' + data._id
  }

  return <Link href={generateLink()}><a className={`card ${!events ? 'no_events': ''}`}>
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

export default Card
