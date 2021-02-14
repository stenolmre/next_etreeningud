import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSettingsState, useSettingsDispatch } from './../context/settings'
import { getSettings } from './../actions/settings'

const Navbar = () => {
  const { pathname } = useRouter()

  const dispatchSettings = useSettingsDispatch()
  const { social } = useSettingsState()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  return <nav>
    <div>
      <img src="https://etreeningud.ee/media/images/logo.png" alt="logo"/>
    </div>
    <div>
      <Link href="/">
        <a className={pathname === '/' ? 'active_nav' : null}>Esileht</a>
      </Link>
      <Link href="/fitness">
        <a className={pathname.includes('fitness') ? 'active_nav' : null}>Treeningud</a>
      </Link>
      <Link href="/posts">
        <a className={pathname.includes('posts') ? 'active_nav' : null}>Blog</a>
      </Link>
    </div>
    <div>
      {
        social && social.map(el => <a target="_blank" rel="noreferrer" key={el._id} href={el.link}>
          <i className={el.icon}/>
        </a>)
      }
    </div>
  </nav>
}

export default Navbar
