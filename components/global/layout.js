import React, { Fragment } from 'react'

import { useConfigState } from '@context/config'

import Navbar from './navbar'

const Layout = ({ children }) => {
  const { loading } = useConfigState()

  return <section>
    {
      loading
        ? 'LOADING..'
        : <Fragment>
          <Navbar />
          { children }
        </Fragment>
    }
  </section>
}

export default Layout
