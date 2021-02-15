import React, { Fragment } from 'react'
import axios from 'axios'
import Head from './../../components/utils/head'

import Layout from './../../components/layout'
import PostContent from './../../components/posts/post'

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

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/posts/get?id=${id}`)
    : await axios.get(`https://et-tau.vercel.app/api/posts/get?id=${id}`)

  return { post: data }
}

export default Post
