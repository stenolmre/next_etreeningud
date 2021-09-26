import React, { Fragment } from 'react'
import Head from 'next/head'

import Layout from '@c/global/layout'
import Landing from '@c/views/landing'
import Fitness from '@c/apps/landing/fitness'
import Features from '@c/apps/landing/features'
import Blog from '@c/apps/landing/blog'
import Footer from '@c/global/footer'

const Index = () => {
  return <Fragment>
    <Head>
      <title>eTreeningud</title>
    </Head>
    <Layout>
      <Landing />
      <Fitness />
      <Features />
      <Blog />
    </Layout>
    <Footer />
  </Fragment>
}

export default Index
