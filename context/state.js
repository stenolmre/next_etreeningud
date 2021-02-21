import React from 'react'
import FitnessProvider from './fitness'
import PostProvider from './post'
import SettingsProvider from './settings'
import AdminProvider from './admin'
import WriterProvider from './writer'
import Analytic from './analytic'

const GlobalState = ({ children }) => {
  return <FitnessProvider>
    <PostProvider>
      <SettingsProvider>
        <AdminProvider>
          <WriterProvider>
            <Analytic>
              { children}
            </Analytic>
          </WriterProvider>
        </AdminProvider>
      </SettingsProvider>
    </PostProvider>
  </FitnessProvider>
}

export default GlobalState
