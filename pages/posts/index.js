import React, { Fragment } from 'react'
import Head from '@c/utils/head'

import Layout from '@c/layout'
import Posts from '@c/posts/posts'

const Index = () => {
  return <Fragment>
    <Head title="Blogi" url="https://etreeningud.ee/posts"/>
    <Layout>
      <Posts />
    </Layout>
  </Fragment>
}

export default Index
