import React from 'react'

const MainCard = () => {
  return <div className="postcard_main">
    <span>Kiyoko Yoshi</span>
    <h2>How to make morning coffee, according to the Science</h2>
    <small>#tervis</small>
    <small>31 jaan 2022</small>
  </div>
}

const SmCard = ({ image }) => {
  return <div className="postcard_sm">
    <div className="image" style={{ backgroundImage: `url(${image})`}}/>
    <section>
      <h4>Moving is good, even if you just walk around the city.</h4>
      <div>
        <span>Kiyoko Yoshi</span>
        <span>#eluviis</span>
      </div>
    </section>
    <i className="fas fa-chevron-right" />
  </div>
}

export { MainCard, SmCard }
