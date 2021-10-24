import React, { Fragment } from 'react'
import Head from 'next/head'
import axios from 'axios'

import usePosts from '@hooks/usePosts'

import Layout from '@c/global/layout'
import Post from '@c/apps/blog/post'

const Index = ({ post }) => {
  const { posts } = usePosts()

  return <Fragment>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Layout>
      <Post post={post} posts={posts}/>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/post?id=${id}`)
    : await axios.get(`https://etreeningud.ee/api/post?id=${id}`)

  return { post: data }
}

export default Index
