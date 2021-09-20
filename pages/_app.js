import React, { Fragment } from 'react'

import GlobalState from '@context/state'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@styles/main.scss'

const App = ({ Component, pageProps }) => <GlobalState>
  <Component { ...pageProps } />
</GlobalState>

export default App
