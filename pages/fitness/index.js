import React, { Fragment } from 'react'
import Head from './../../components/utils/head'

import Layout from './../../components/layout'

const Fitness = () => {
  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/fitness"/>
    <Layout>
      <div style={style}>
        Fitness Page
      </div>
    </Layout>
  </Fragment>
}

export default Fitness

const style = {
  width: '100%',
  height: 'calc(100vh - 225px)',
  display: 'grid',
  placeItems: 'center',
}
