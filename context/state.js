import React from 'react'
import FitnessProvider from '@context/fitness'
import PostProvider from '@context/post'
import UserProvider from '@context/user'

const GlobalState = ({ children }) => {
  return <UserProvider>
    <FitnessProvider>
      <PostProvider>
        { children }
      </PostProvider>
    </FitnessProvider>
  </UserProvider>
}

export default GlobalState
