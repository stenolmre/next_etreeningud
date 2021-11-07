import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserState } from '@context/user'
import { useConfigState } from '@context/config'

import Tooltip from '@ui/ui/tooltip'

const Navbar = () => {
  const router = useRouter()
  const { user } = useUserState()
  const { social } = useConfigState()

  const [navs] = useState([
    { name: 'Esileht', href: '/' },
    { name: 'Treeningud', href: '/fitness' },
    { name: 'Blogi', href: '/blog' },
  ])

  return <nav>
    <div id="logo" onClick={() => router.push('/')}>
      <div className="logo"/>
      <span>eTreeningud</span>
    </div>
    <div id="navs">
      {
        navs.map((nav, index) => <Link key={index} href={nav.href}><a className={router.pathname === nav.href ? 'active' : ''}>
          {nav.name}
        </a></Link>)
      }
    </div>
    <Tooltip tooltip={user != null ? 'Minu töölaud' : 'Logi sisse'} position="bottom">
      <i className="fas fa-fingerprint" onClick={() => window.open('https://app.etreeningud.ee', '_blank')}/>
    </Tooltip>
    <div id="social">
      {
        social.map((link, index) => <Tooltip tooltip={link.tooltip} position="bottom" key={index}>
          <a href={link.link}>
            <i className={link.icon} />
          </a>
        </Tooltip>)
      }
    </div>
  </nav>
}

export default Navbar
