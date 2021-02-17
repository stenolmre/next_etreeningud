import React from 'react'
import Link from 'next/link'

const Card = ({ fit }) => {
  return <Link href={fit.category !== 'jooga' ? `/fitness/${fit._id}?name=${fit.name.replaceAll(' ', '-')}` : `/yoga/${fit._id}?name=${fit.name.replaceAll(' ', '-')}`}><a className="blog_card">
    <div className="blog_card_img neumorphism">
      <img src={fit.image} alt={fit.name}/>
    </div>
    <div className="blog_card_info">
      <p style={{ textTransform: 'capitalize' }}>{fit.category}</p>
      <p style={{ fontWeight: '400' }}>{fit.equipment}</p>
    </div>
    <div className="blog_card_content">
      <h3>{fit.name}</h3>
      <p>{fit.intro}</p>
    </div>
    <div className="blog_card_bottom_info">
      <p>
        {
          fit.category.toLowerCase() === 'hiit'
            ? <i className="fas fa-heartbeat"/>
            : fit.category.toLowerCase() === 'jõud'
              ? <i className="fas fa-dumbbell"/>
              : fit.category.toLowerCase() === 'mobility'
                ? <i className="fas fa-spa"/>
                : <i className="fas fa-peace"/>
        }
      </p>
      <p>{new Date(fit.createdAt).toLocaleDateString()}</p>
    </div>
  </a></Link>
}

export default Card
