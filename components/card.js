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
  }

  return <div className="card">
    <div className="card_top">
      <div className="card_image" style={{ backgroundImage: `url('${data.image}')`}}/>
      <div className="card_top_content">
        <span>{data.category}</span>
        <span>{data.equipment || data.author}</span>
      </div>
    </div>
    <div className="card_bottom">
      <h3>{data.name}</h3>
      <span>{data.intro || data.excerpt}</span>
    </div>
    <div className="card_footer">
      <i className={selectIcon()} />
      <span>{new Date(data.createdAt).toLocaleDateString()}</span>
    </div>
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
}
