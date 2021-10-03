import React from 'react'
import FitnessProvider from '@context/fitness'
import PostProvider from '@context/post'
import UserProvider from '@context/user'
import ConfigProvider from '@context/config'

const GlobalState = ({ children }) => {
  return <UserProvider>
    <FitnessProvider>
      <PostProvider>
        <ConfigProvider>
          { children }
        </ConfigProvider>
      </PostProvider>
    </FitnessProvider>
  </UserProvider>
}

export default GlobalState
