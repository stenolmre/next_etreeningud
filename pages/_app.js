import React from 'react'

import GlobalState from './../context/state'

import '@fortawesome/fontawesome-free/css/all.min.css';
import './../css/styles.css'
import './../css/fitness.css'
import './../css/landing.css'
import './../css/admin.css'

import '@styles/main.scss'

import MarkVisitor from './../utils/markvisitor'

const App = ({ Component, pageProps }) => {
  return <GlobalState>
    <MarkVisitor>
      <Component { ...pageProps } />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
      `}</style>
    </MarkVisitor>
  </GlobalState>
}

export default App
