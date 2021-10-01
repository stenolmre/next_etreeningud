import React, { Fragment, useEffect } from 'react'

import GlobalState from '@context/state'
import CheckUser from '@c/utils/checkuser'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@styles/main.scss'

const App = ({ Component, pageProps }) => {
  return <GlobalState>
    <CheckUser />
    <Component { ...pageProps } />
  </GlobalState>
}

export default App
