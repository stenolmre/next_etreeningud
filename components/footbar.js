import React, { useState } from 'react'
import Link from 'next/link'

const Footbar = () => {
  const [show, setShow] = useState(false)
  const navs = [{
    icon: 'fas fa-home',
    title: 'Home',
    link: '/'
  }, {
    icon: 'fas fa-blog',
    title: 'Blog',
    link: '/posts'
  }, {
    icon: 'fas fa-rocket',
    title: 'Fit',
    link: '/fitness'
  }]

  return <div className="footbar">
    <i className={`fas fa-${show ? 'times' : 'bars'}`} onClick={() => setShow(!show)}/>
    {
      navs.map((nav, index) => <Link href={nav.link} key={index}><a className={`footbar_nav footbar_nav_${show ? index : ''}`}>
        <i className={nav.icon}/>
        <span>{nav.title}</span>
      </a></Link>)
    }
  </div>
}

export default Footbar
