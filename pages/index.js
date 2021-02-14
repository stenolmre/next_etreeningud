import React from 'react'

import Layout from './../components/layout'

const Index = () => {
  return <Layout>
    <div style={style}>
      Hello World! We are gonna change it!
    </div>
  </Layout>
}

export default Index

const style = {
  width: '100%',
  height: 'calc(100vh - 225px)',
  display: 'grid',
  placeItems: 'center',
}
