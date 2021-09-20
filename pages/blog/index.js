import React, { Fragment } from 'react'
import Head from 'next/head'

import Layout from '@c/global/layout'
import Sidebar from '@c/global/sidebar'
import Blog from '@c/apps/blog/blog'

const Index = () => {
  return <Fragment>
    <Head>
        <title>eTreeningud</title>
    </Head>
    <Layout>
      <Sidebar />
      <Blog />
    </Layout>
  </Fragment>
}

export default Index
