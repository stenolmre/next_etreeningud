import React from 'react'
import { GeistSans } from 'geist/font/sans'

import GlobalState from './../context/state'

import './../css/index.css'

const App = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <GlobalState>
        <Component {...pageProps} />
      </GlobalState>
    </div>
  )
}

export default App
