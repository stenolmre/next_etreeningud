import React, { Fragment } from 'react'
import Link from 'next/link'

import Layout from './../layout'

const Mobility = ({ mobility }) => {
  return <Layout>
    <div className="yoga_page">
      <div className="blog_card">
        <div className="blog_card_img neumorphism">
          <img src={mobility.image} alt={mobility.name}/>
        </div>
        <div className="blog_card_info">
          <p style={{ textTransform: 'capitalize' }}>{mobility.category}</p>
          <p style={{ fontWeight: '400' }}>{mobility.equipment}</p>
        </div>
        <div className="blog_card_content">
          <h3>{mobility.name}</h3>
          <p>{mobility.intro}</p>
        </div>
        <div className="blog_card_bottom_info">
          <p><i className="fas fa-peace"/></p>
          <p>{new Date(mobility.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="yoga_page_video neumorphism">
        <iframe src={`https://www.youtube.com/embed/${mobility.video}`} frameBorder="0" allowFullScreen/>
      </div>
    </div>
  </Layout>
}

export default Mobility
