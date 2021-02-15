import React, { Fragment } from 'react'
import Head from './../../components/utils/head'

import Layout from './../../components/layout'

const Posts = () => {
  return <Fragment>
    <Head title="Blog" url="https://etreeningud.ee/posts"/>
    <Layout>
      <div style={style}>
        Posts Page
      </div>
    </Layout>
  </Fragment>
}

export default Posts

const style = {
  width: '100%',
  height: 'calc(100vh - 225px)',
  display: 'grid',
  placeItems: 'center',
}
