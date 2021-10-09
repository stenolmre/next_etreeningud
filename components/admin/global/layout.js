import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserState, useUserDispatch } from '@context/user'
import { getUsers } from '@actions/user'

import Navbar from '@admin/global/navbar'
import Sidebar from '@c/global/sidebar'
import Collapsible from '@c/global/collapsible'

const Layout = ({ children }) => {
  const router = useRouter()
  const { user, users } = useUserState()
  const dispatchUser = useUserDispatch()

  const navs = [
    {name: 'Treeningud', link: '/user/fitness', icon: 'fas fa-dumbbell'},
    {name: 'Toitumine', link: '/user/food', icon: 'fas fa-apple-alt'},
    {name: 'Kehaanalüüsid', link: '/user/analysis', icon: 'fas fa-chart-line'}
  ]

  useEffect(() => {
    if (user && user.isAdmin) getUsers(dispatchUser)
  }, [dispatchUser, user])

  return <div className="admin">
    <Navbar />
    <Sidebar>
      {
        navs.map(nav => <Link key={nav.name} href={nav.link}><a>
          <i className={nav.icon}/>
          <span>{nav.name}</span>
        </a></Link>)
      }
      {
        user && user.isAdmin && <Fragment>
          <Collapsible title="Users" icon="fas fa-user">
            {
              users && users.map(user => <div key={user._id}>{user.name}</div>)
            }
          </Collapsible>
          <Collapsible title="Blog" icon="fas fa-pen">
            <div onClick={() => router.push('/user/newpost')}>Uus</div>
            <div>Nimekiri</div>
          </Collapsible>
        </Fragment>
      }
    </Sidebar>
    <div className="admin_content">
      { children }
    </div>
  </div>
}

export default Layout
