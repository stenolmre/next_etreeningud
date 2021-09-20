import React, { Fragment } from 'react'
import Head from 'next/head'

import Layout from '@c/global/layout'
import Sidebar from '@c/apps/fitness/sidebar'
import Fitness from '@c/apps/fitness/fitness'

const Index = () => {
  return <Fragment>
    <Head>
        <title>eTreeningud</title>
    </Head>
    <Layout>
      <Sidebar />
      <Fitness />
    </Layout>
  </Fragment>
}

export default Index
