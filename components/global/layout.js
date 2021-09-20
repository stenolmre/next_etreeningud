import React from 'react'

import Navbar from './navbar'

const Layout = ({ children }) => {
  return <section>
    <Navbar />
    {children}
  </section>
}

export default Layout
