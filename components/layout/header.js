import React from 'react'

const Header = ({ pills = ['etreeningud'] }) => {
  return <div className="header">
    <div className="owner_image"/>
    <span>Keisy Põldsam</span>
    <h1>Tere tulemast eTreeningutesse!</h1>
    <h3>Mina olen Keisy ja ma soovin sulle häid trennielamusi!</h3>
    <div className="pills">
      {
        pills.map(pill => <span key={pill} className="pill">#{pill}</span>)
      }
    </div>
  </div>
}

export default Header
