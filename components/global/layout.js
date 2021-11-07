import React, { Fragment } from 'react'

import { useConfigState } from '@context/config'

import Navbar from './navbar'
import Footbar from './footbar'
import Loading from '@ui/ui/loading'

const Layout = ({ children }) => {
  const { loading } = useConfigState()

  return <section>
    {
      loading
        ? <Loading message="Hi there! It will just take a moment."/>
        : <Fragment>
          <Navbar />
          { children }
          <Footbar />
        </Fragment>
    }
  </section>
}

export default Layout
