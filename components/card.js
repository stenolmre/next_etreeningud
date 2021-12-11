import React from 'react'

const Card = ({ data }) => {
  const selectIcon = () => {
    if (data.category.toLowerCase() === 'jooga') return icons.jooga
    if (data.category.toLowerCase() === 'jõud') return icons.joud
    if (data.category.toLowerCase() === 'hiit') return icons.hiit

    if (data.category.toLowerCase() === 'tervis') return icons.tervis
    if (data.category.toLowerCase() === 'treening') return icons.treening
    if (data.category.toLowerCase() === 'inimesed') return icons.inimesed
    if (data.category.toLowerCase() === 'toitumine') return icons.toitumine
    if (data.category.toLowerCase() === 'vaba aeg') return icons.vabaaeg
  }

  return <div className="card">
    <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>
    <div className="content">
      <h3>{data.name}</h3>
      <div className="card_hashtags">
        <span>#{data.category.toLowerCase()}</span>
      </div>
    </div>
    <div className="card_footer">
      <div className="card_author"/>
      <div className="content">
        <h5>Kiyoko Yoshi</h5>
        <h5>Jaan 15 2021</h5>
      </div>
    </div>
    <div className="card_category" />
  </div>
}

export default Card

const icons = {
  jooga: 'fas fa-peace color-secondary-orange',
  joud: 'fas fa-dumbbell color-primary-green',
  hiit: 'fas fa-heartbeat color-primary-red',

  tervis: 'fas fa-heartbeat color-primary-red',
  treening: 'fas fa-dumbbell color-primary-green',
  inimesed: 'fas fa-walking color-primary-blue',
  toitumine: 'fas fa-apple-alt color-secondary-orange',
  vabaaeg: 'fas fa-arrow-up color-darkslategray'
}
