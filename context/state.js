import React from 'react'
import FitnessProvider from './fitness'
import PostProvider from './post'
import SettingsProvider from './settings'
import AdminProvider from './admin'
import WriterProvider from './writer'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      <SettingsProvider>
        <AdminProvider>
          <WriterProvider>
            { children}
          </WriterProvider>
        </AdminProvider>
      </SettingsProvider>
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
