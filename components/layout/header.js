import React from 'react'

const Header = ({ pills = ['etreeningud'] }) => {
  return <div className="header">
    <div className="owner_image"/>
    <h1>Tere tulemast eTreeningutesse!</h1>
    <h3>Mina olen Keisy ja mul on nii hea meel, et leidsid tee eTreeingute keskkonda. Meie meeskond ja Mina soovime sulle huvitavaid blogielamusi ning treeninguteks jõudu ja positiivset meelt! Aitäh, et võtad osa eTreeningutest.</h3>
    <div className="pills">
      {
        pills.map(pill => <span key={pill} className="pill">#{pill}</span>)
      }
    </div>
  </div>
}

export default Header
