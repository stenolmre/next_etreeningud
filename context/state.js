import React from 'react'
import FitnessProvider from './fitness'
import PostProvider from './post'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      { children}
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
