import React from 'react'

import parseDate from '@utils/parseDate'

const Card = ({ image, category, equipment, title, info, icon, date }) => {
  return <div className="card">
    <div className="card_header">
      <div className="card_image">
        <img src={image} alt={title}/>
      </div>
      <div>
        <p>{category}</p>
        <span>{equipment}</span>
      </div>
    </div>
    <div className="card_info">
      <h2>{title}</h2>
      <span>{info}</span>
    </div>
    <div className="card_footer">
      <i className={icon} />
      <span>{parseDate(date)}</span>
    </div>
  </div>
}

export default Card
