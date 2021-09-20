import React from 'react'
import FitnessProvider from '@context/fitness'
import PostProvider from '@context/post'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      { children }
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
