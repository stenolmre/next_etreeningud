import React from 'react'
import Link from 'next/link'

import calcReadTime from '@ui/utils/calcReadTime'
import { getDate } from '@ui/utils/date'
import generateLink from '@utils/generateLink'
import getAuthor from '@utils/getAuthor'

import { useConfigState } from '@context/config'

const MainCard = ({ data, events = true, blog = true }) => {
  const { writers } = useConfigState()

  return <Link href={generateLink(data, blog)}><a className={`card ${!events ? 'no_events': ''}`} rel={data.category === 'jooga' ? 'noreferrer' : ''} target={data.category === 'jooga' ? '_blank': ''}>
    <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>
    <div className="content">
      <h3>{data.name}</h3>
      <div className="card_hashtags">
        <span>#{data.category.toLowerCase()}</span>
        {
          data.equipment != null && data.equipment.map(e => <span key={e}>#{e.toLowerCase()}</span>)
        }
        {
          data.length != null && <span>#{data.length}min</span>
        }
        {
          data.content != null && <span>#{calcReadTime(data.content)}</span>
        }
        {
          <span>#{data._id}</span>
        }
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

  return <Link href={generateLink(data, blog)}><a className="card_lg" style={{ backgroundImage: `url(${data.image})`}} rel={data.category === 'jooga' ? 'noreferrer' : ''} target={data.category === 'jooga' ? '_blank': ''}>
    <span>{getAuthor(data, writers).name}</span>
    <h2>{data.name}</h2>
    <small>#{data.category}</small>
    <small>{getDate(data.createdAt, 'est')}</small>
  </a></Link>
}

const SmCard = ({ data, blog = true }) => {
  return <Link href={generateLink(data, blog)}><a className="card_sm" rel={data.category === 'jooga' ? 'noreferrer' : ''} target={data.category === 'jooga' ? '_blank': ''}>
    <div className="image" style={{ backgroundImage: `url(${data.image})`}}/>
    <div className="content">
      <h5>{data.name}</h5>
      <h5>#{data.category}</h5>
    </div>
    <i className="fas fa-chevron-right" />
  </a></Link>
}

export { MainCard, LgCard, SmCard }
