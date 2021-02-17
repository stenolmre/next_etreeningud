import React, { Fragment } from 'react'
import Link from 'next/link'

const Yoga = ({ yoga }) => {
  return <Fragment>
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
    <div className="yoga_footer">
      <Link href="/"><a>Esileht</a></Link>
      <Link href="/fitness"><a>Treeningud</a></Link>
      <Link href="/posts"><a>Blogi</a></Link>
      <Link href="/"><a>Contact</a></Link>
    </div>
  </Fragment>
}

export default Yoga
