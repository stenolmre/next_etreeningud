import React, { useState } from 'react'
import Link from 'next/link'

const Footbar = () => {
  const [show, setShow] = useState(false)
  const navs = [{
    icon: 'fas fa-home',
    title: 'Esileht',
    link: '/'
  }, {
    icon: 'fas fa-blog',
    title: 'Blogi',
    link: '/posts'
  }, {
    icon: 'fas fa-dumbbell',
    title: 'Fit',
    link: '/fitness'
  }, {
    icon: 'fas fa-mobile-alt',
    title: 'Kontakt',
    link: 'https://m.me/coachkeisy'
  }]

  return <div className="footbar footbar_expanded">
    <div className="footbar_main" onClick={() => setShow(!show)}>
      <i className={`fas fa-${show ? 'times' : 'bars'}`}/>
      <span>{show ? 'Sulge' : 'Menüü'}</span>
    </div>
    {
      navs.map((nav, index) => <Link href={nav.link} key={index}><a className={`footbar_nav footbar_nav_${show ? index : ''}`}>
        <i className={nav.icon}/>
        <span>{nav.title}</span>
      </a></Link>)
    }
  </div>
}

export default Footbar
