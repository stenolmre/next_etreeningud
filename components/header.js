import React from 'react'

const Header = ({ pills = [], title, info, icon }) => {
  return <div className="header">
    <div className="header_title">
      <div>
        <i className={icon}/>
        <h2>{title}</h2>
      </div>
      <h1><span>et.</span></h1>
    </div>
    <span>{info}</span>
    <div className="pills">
      {
        pills.map(pill => <span key={pill} className="pill">#{pill}</span>)
      }
    </div>
  </div>
}

export default Header
