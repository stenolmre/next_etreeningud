import React from 'react'
import Link from 'next/link'

import { getDate } from '@ui/utils/date'
import generateLink from '@utils/generateLink'
import getAuthor from '@utils/getAuthor'

import { useConfigState } from '@context/config'

const MainCard = ({ data, events = true, blog = true }) => {
  const { writers } = useConfigState()

  return <Link href={generateLink(data, blog)}><a className={`card ${!events ? 'no_events': ''}`}>
    <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>
    <div className="content">
      <h3>{data.name}</h3>
      <div className="card_hashtags">
        <span>#{data.category.toLowerCase()}</span>
      </div>
    </div>
    <div className="card_footer">
      <div className="image" style={{ backgroundImage: `url(${getAuthor(data, writers).image})`}}/>
      <div className="content">
        <h5>{getAuthor(data, writers).name}</h5>
        <h5>{getDate(data.createdAt, 'est')}</h5>
      </div>
    </div>
    <div className="card_category" />
  </a></Link>
}

const LgCard = ({ data, blog = true }) => {
  const { writers } = useConfigState()

  return <Link href={generateLink(data, blog)}><a className="postcard_main" style={{ backgroundImage: `url(${data.image})`}}>
    <span>{getAuthor(data, writers).name}</span>
    <h2>{data.name}</h2>
    <small>#{data.category}</small>
    <small>{getDate(data.createdAt, 'est')}</small>
  </a></Link>
}

const SmCard = ({ data, blog = true }) => {
  const { writers } = useConfigState()


  return <Link href={generateLink(data, blog)}><a className="postcard_sm">
    <div className="image" style={{ backgroundImage: `url(${data.image})`}}/>
    <section>
      <h4>{data.name}</h4>
      <div>
        <span>{getAuthor(data, writers).name}</span>
        <span>#{data.category}</span>
      </div>
    </section>
    <i className="fas fa-chevron-right" />
  </a></Link>
}

export { MainCard, LgCard, SmCard }
