import React, { Fragment } from 'react'

import useFitness from '@hooks/useFitness'
import usePosts from '@hooks/usePosts'
import useWriters from '@hooks/useWriters'

import Footbar from '@c/footbar'

const Layout = ({ children }) => {
  useFitness()
  usePosts()
  useWriters()

  return <Fragment>
    { children }
    <Footbar />
  </Fragment>
}

export default Layout
