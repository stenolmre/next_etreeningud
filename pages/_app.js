import React from 'react'

import GlobalState from '@context/state'
import GetConfig from '@c/utils/getconfig'
import GetUser from '@c/utils/getuser'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@styles/main.scss'

const App = ({ Component, pageProps }) => {
  return <GlobalState>
    <GetConfig />
    <GetUser />
    <Component { ...pageProps } />
  </GlobalState>
}

export default App
