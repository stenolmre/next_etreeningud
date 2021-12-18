import React, { useState } from 'react'
import Link from 'next/link'

import { useConfigDispatch } from '@context/config'
import { toggleSidebar } from '@actions/config'

const Footbar = () => {
  const [show, setShow] = useState(false)
  const navs = [{
    icon: 'fas fa-dumbbell',
    title: 'Fit',
    link: '/'
  }, {
    icon: 'fas fa-blog',
    title: 'Blogi',
    link: '/posts'
  }, {
    icon: 'fas fa-mobile-alt',
    title: 'Kontakt',
    link: 'https://m.me/coachkeisy'
  }]

  const dispatchConfig = useConfigDispatch()

  const closeSidebar = () => {
    toggleSidebar(dispatchConfig)
    setShow(false)
  }

  return <div className="footbar_expanded footbar">
    <div className="footbar_main" onClick={() => setShow(!show)}>
      <i className={`fas fa-${show ? 'times' : 'bars'}`}/>
      <span>{show ? 'Sulge' : 'Menüü'}</span>
    </div>
    {
      navs.map((nav, index) => <Link href={nav.link} key={index}><a className={`footbar_nav footbar_nav_${show ? index : ''}`} rel={nav.title === 'Kontakt' ? 'noreferrer' : ''} target={nav.title === 'Kontakt' ? '_blank': ''}>
        <i className={nav.icon}/>
        <span>{nav.title}</span>
      </a></Link>)
    }
    <div className={`footbar_nav footbar_nav_${show ? '3' : ''}`} onClick={closeSidebar}>
      <i className="fas fa-cog"/>
      <span>Seaded</span>
    </div>
  </div>
}

export default Footbar
