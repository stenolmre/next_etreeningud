import React, { Fragment } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const App = ({ Component, pageProps }) => {
  return <Fragment>
    <Component { ...pageProps } />
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
    `}</style>
  </Fragment>
}

export default App
