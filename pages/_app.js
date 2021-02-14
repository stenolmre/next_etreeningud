import React from 'react'

import GlobalState from './../context/state'

import '@fortawesome/fontawesome-free/css/all.min.css';
import './../css/styles.css'

const App = ({ Component, pageProps }) => {
  return <GlobalState>
    <Component { ...pageProps } />
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
    `}</style>
  </GlobalState>
}

export default App
