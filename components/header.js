import React from 'react'

const Header = ({ pills = [], title }) => {
  return <div className="header">
    <i className="fas fa-search"/>
    <h2>{title}</h2>
    <span>Discover ways to improve  yourself.</span>
    <div className="pills">
      {
        pills.map(pill => <span key={pill} className="pill">{pill}</span>)
      }
    </div>
  </div>
}

export default Header
