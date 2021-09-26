import React, { Fragment } from 'react'
import Head from 'next/head'

import usePosts from '@hooks/usePosts'

import Layout from '@c/global/layout'
import Sidebar from '@c/apps/blog/sidebar'
import Blog from '@c/apps/blog/blog'

const Index = () => {
  const { posts, sortBy } = usePosts()

  return <Fragment>
    <Head>
      <title>eTreeningud</title>
    </Head>
    <Layout>
      <Sidebar />
      <Blog posts={posts} sortBy={sortBy}/>
    </Layout>
  </Fragment>
}

export default Index
