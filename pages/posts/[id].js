import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@c/utils/head'

import Layout from '@c/layout'
import PostContent from '@c/posts/post'

const Post = ({ post }) => {
  return <Fragment>
    <Head title={post.name} url={`https://etreeningud.ee/posts/${post._id}?name=${post.name}`} image={post.image} description={post.excerpt}/>
    <Layout>
      <PostContent post={post}/>
    </Layout>
  </Fragment>
}

Post.getInitialProps = async ctx => {
  const id = ctx.query.id
  const host = ctx.req.headers.host
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'

  console.log(id, host, base)

  const { data } = await axios.get(base + host + '/api/posts/get?id=' + id)
  return { post: data }
}

export default Post
