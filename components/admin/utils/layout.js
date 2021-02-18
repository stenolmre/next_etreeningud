import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

import { useAdminDispatch } from './../../../context/admin'
import { getAdmin } from './../../../actions/admin'

import Sidebar from './sidebar'
import Toolbar from './toolbar'

const Layout = ({ children, name, searchbox, onChange, placeholder }) => {
  const id = Cookies.get('user_token') ? Cookies.get('user_token') : ''

  const dispatchAdmin = useAdminDispatch()

  useEffect(() => { getAdmin(dispatchAdmin, id) }, [dispatchAdmin, id])

  return <div className="admin_layout_container">
    <Sidebar />
    <div className="admin_layout">
      <Toolbar name={name} searchbox={searchbox} onChange={onChange} placeholder={placeholder}/>
      { children }
    </div>
  </div>
}

export default Layout
