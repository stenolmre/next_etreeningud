import React from 'react'
import FitnessProvider from '@context/fitness'
import PostProvider from '@context/post'
import ConfigProvider from '@context/config'
import Analytic from '@context/analytic'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      <ConfigProvider>
        <Analytic>
          { children}
        </Analytic>
      </ConfigProvider>
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
