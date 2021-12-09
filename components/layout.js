import React, { Fragment } from 'react'

import useFitness from '@hooks/useFitness'
import usePosts from '@hooks/usePosts'

import Footbar from '@c/footbar'

const Layout = ({ children }) => {
  useFitness()
  usePosts()

  return <Fragment>
    { children }
    <Footbar />
  </Fragment>
}

export default Layout
