import React from 'react'
import Link from 'next/link'

import Navbar from '@admin/global/navbar'
import Sidebar from '@c/global/sidebar'

const Layout = () => {
  const navs = [
    {name: 'Treeningud', link: '/user/fitness', icon: 'fas fa-dumbbell'},
    {name: 'Toitumine', link: '/user/food', icon: 'fas fa-apple-alt'},
    {name: 'Kehaanalüüsid', link: '/user/analysis', icon: 'fas fa-chart-line'}
  ]
  return <div className="admin">
    <Navbar />
    <Sidebar>
      {
        navs.map(nav => <Link key={nav.name} href={nav.link}><a>
          <i className={nav.icon}/>
          <span>{nav.name}</span>
        </a></Link>)
      }
    </Sidebar>
  </div>
}

export default Layout
