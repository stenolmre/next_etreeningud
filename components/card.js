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

  return <div className="_card">
    <div className="img" style={{ backgroundImage: `url('${data.image}')`}}/>
    <div className="h3">{data.name}</div>
    <div className="_card_footer">
      <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="png"/>
      <div>
        <span>{data.author || data.category}</span>
        <span>{data.equipment || new Date(data.createdAt).toLocaleDateString()}</span>
      </div>
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
  vabaaeg: 'fas fa-arrow-up color-darkslategray'
}
