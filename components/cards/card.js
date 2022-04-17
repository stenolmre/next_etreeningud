import React from 'react'
import Link from 'next/link'

import { useConfigState } from '@context/config'

import calcReadTime from '@ui/utils/calcReadTime'
import { getDate } from '@ui/utils/date'
import getCreator from '@utils/getAuthor'
import generateLink from '@utils/generateLink'

const Card = ({ data, image = true }) => {
  const { writers } = useConfigState()

  const creator = data != null && getCreator(data, writers)
  const isYoga = data.category === 'jooga'

  return <Link href={generateLink(data, data.content != null)}>
    <a className="card" rel={isYoga ? 'noreferrer' : ''} target={isYoga ? '_blank': ''}>
      {image && <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>}
      <div className="card_content">
        <div className="card_heading">{data.name}</div>
        <div className="card_hashtags">
          {data.category != null && <span>#{data.category.toLowerCase()}</span>}
          {data.equipment != null && data.equipment.map(e => <span key={e}>#{e.toLowerCase()}</span>)}
          {data.length != null && <span>#{data.length}min</span>}
          {data.content != null && <span>#{calcReadTime(data.content)}</span>}
        </div>
        <div className="card_footer">
          <div className="card_creator_image" style={{ backgroundImage: `url('${creator.image}')`}}/>
          <div className="card_creator_name">{creator.name}</div>
          <div className="card_date">{getDate(data.createdAt, 'est')}</div>
        </div>
      </div>
    </a>
  </Link>
}

export default Card
