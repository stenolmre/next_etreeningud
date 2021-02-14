import React from 'react'
import FitnessProvider from './fitness'
import PostProvider from './post'
import SettingsProvider from './settings'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      <SettingsProvider>
        { children}
      </SettingsProvider>
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
