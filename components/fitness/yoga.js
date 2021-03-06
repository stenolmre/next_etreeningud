import React, { Fragment } from 'react'
import Link from 'next/link'

import Layout from './../layout'

const Yoga = ({ yoga }) => {
  return <Layout>
    <div className="yoga_page">
      <div className="blog_card">
        <div className="blog_card_img neumorphism">
          <img src={yoga.image} alt={yoga.name}/>
        </div>
        <div className="blog_card_info">
          <p style={{ textTransform: 'capitalize' }}>{yoga.category}</p>
          <p style={{ fontWeight: '400' }}>{yoga.equipment}</p>
        </div>
        <div className="blog_card_content">
          <h3>{yoga.name}</h3>
          <p>{yoga.intro}</p>
        </div>
        <div className="blog_card_bottom_info">
          <p><i className="fas fa-peace"/></p>
          <p>{new Date(yoga.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="yoga_page_video neumorphism">
        <iframe src={`https://www.youtube.com/embed/${yoga.video}`} frameBorder="0" allowFullScreen/>
      </div>
    </div>
  </Layout>
}

export default Yoga
