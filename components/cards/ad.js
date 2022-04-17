import React from 'react'
import Link from 'next/link'

import generateLink from '@utils/generateLink'
import calcReadTime from '@ui/utils/calcReadTime'

const Ad = ({ data }) => {
  const isYoga = data.category === 'jooga'

  return <Link href={generateLink(data, data.content != null)}>
    <a className="card_sidebar" rel={isYoga ? 'noreferrer' : ''} target={isYoga ? '_blank': ''}>
      <div className="image" style={{ backgroundImage: `url(${data.image})`}}/>
      <div className="content">
        <h5>{data.name}</h5>
        <div className="ad_hashtags">
          <span>#{data.category}</span>
          {data.length != null && <span>#{data.length}min</span>}
          {data.content != null && <span>#{calcReadTime(data.content)}</span>}
        </div>
      </div>
      <i className="icon-stn-right-arrow color-dodgerblue fs-24 pl-8" />
    </a>
  </Link>
}

export default Ad
