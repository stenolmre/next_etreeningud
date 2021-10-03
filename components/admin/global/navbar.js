import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { useUserState, useUserDispatch } from '@context/user'
import { logout } from '@actions/user'
import useCloser from '@hooks/useCloser'

const Navbar = () => {
  const router = useRouter()
  const { user } = useUserState()
  const dispatchUser = useUserDispatch()
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  const getInitials = () => {
    const names = user && user.name.split(' ')
    if (names != null) return `${names[0].slice(0, 1)}${names[1].slice(0, 1)}`
  }

  const admin_menu = useRef(null)
  useCloser(admin_menu, () => setShowMenu(false))

  return <div className="admin_navbar">
    <div ref={admin_menu}>
      <span onClick={toggleMenu}>{user && user.name}</span>
      <div className="user_image" onClick={toggleMenu}>{getInitials()}</div>
      {
        showMenu && <div className="sub_menu">
          <span>Minu profiil</span>
          <span onClick={() => logout(dispatchUser, () => router.push('/'))}>Logi välja</span>
        </div>
      }
    </div>
  </div>
}

export default Navbar
