import React, { Fragment } from 'react'
import Head from './../../components/utils/head'

import Layout from './../../components/layout'
import PostsContent from './../../components/posts/posts'

const Posts = () => {
  return <Fragment>
    <Head title="Blog" url="https://etreeningud.ee/posts"/>
    <Layout>
      <PostsContent />
    </Layout>
  </Fragment>
}

export default Posts
