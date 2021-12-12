import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@styles/main.scss'

import GlobalState from '@context/state'
import MarkVisitor from '@utils/markvisitor'

const App = ({ Component, pageProps }) => {
  return <GlobalState>
    <MarkVisitor>
      <Component { ...pageProps } />
    </MarkVisitor>
  </GlobalState>
}

export default App
