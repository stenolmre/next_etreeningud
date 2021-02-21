import React from 'react'

const Card = ({ num, name, icon }) => {
  return <div className="admin_analytics_card neumorphism">
    <h1>{num}</h1>
    <p>{name}</p>
    <i className={`neumorphism ${icon}`}/>
  </div>
}

export default Card
