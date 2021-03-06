import React, { Fragment } from 'react'

import Navbar from './navbar'
import Footer from './footer'
import Footbar from './footbar'

function Layout({ children, landing }) {
  return <Fragment>
    {
      !landing && <Navbar/>
    }
    { children }
    <Footbar />
    <Footer/>
  </Fragment>
}

export default Layout
