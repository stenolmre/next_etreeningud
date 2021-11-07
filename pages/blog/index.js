import React, { Fragment } from 'react'
import Head from 'next/head'

import usePosts from '@hooks/usePosts'

import Layout from '@c/global/layout'
import Sidebar from '@c/apps/blog/sidebar'
import Blog from '@c/apps/blog/blog'

const Index = () => {
  const { posts, sortBy, filterBy } = usePosts()

  return <Fragment>
    <Head>
      <title>eTreeningud</title>
    </Head>
    <Layout>
      <Sidebar sortBy={sortBy} filterBy={filterBy}/>
      <Blog posts={posts} sortBy={sortBy} filterBy={filterBy}/>
    </Layout>
  </Fragment>
}

export default Index
