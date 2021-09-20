import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [navs] = useState([
    { name: 'Esileht', href: '/' },
    { name: 'Treeningud', href: '/fitness' },
    { name: 'Blogi', href: '/blog' },
    { name: 'Kontakt', href: '/contact' }
  ])

  const [social] = useState([
    { icon: 'fab fa-instagram', href: 'https://instagram.com/etreeningud' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/etreeningud' },
    { icon: 'fab fa-youtube', href: 'https://www.youtube.com/channel/UCMJqTp0gaaR4cKGP_oESsYw' },
    { icon: 'fas fa-mobile-alt', href: 'tel:37258810021' },
    { icon: 'far fa-paper-plane', href: 'mailto:info@etreeningud.ee' }
  ])

  return <nav>
    <div id="logo">
      <div className="logo"/>
      <span>eTreeningud</span>
    </div>
    <div id="navs">
      {
        navs.map((nav, index) => <Link key={index} href={nav.href}><a className={useRouter().pathname === nav.href ? 'active' : ''}>
          {nav.name}
        </a></Link>)
      }
    </div>
    <div id="social">
      {
        social.map((link, index) => <a key={index} href={link.href}>
          <i className={link.icon} />
        </a>)
      }
    </div>
  </nav>
}

export default Navbar
