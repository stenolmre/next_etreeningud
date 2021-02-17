import React from 'react'
import FitnessProvider from './fitness'
import PostProvider from './post'
import SettingsProvider from './settings'
import AdminProvider from './admin'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      <SettingsProvider>
        <AdminProvider>
          { children}
        </AdminProvider>
      </SettingsProvider>
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
