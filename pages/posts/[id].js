import React from 'react'
import axios from 'axios'
import Head from '@utils/head'

import usePosts from '@hooks/usePosts'

import Layout from '@c/layout/layout'
import PostContent from '@c/posts/post'

const Index = ({ post }) => {
  usePosts()
  return <Layout post>
    <Head title={post.name} url={`https://etreeningud.ee/posts/${post._id}?name=${post.name}`} image={post.image} description={post.excerpt}/>
    <PostContent post={post}/>
  </Layout>
}

export async function getServerSideProps(ctx) {
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
  const { data } = await axios.get(`${base}${ctx.req.headers.host}/api/posts/get?id=${ctx.query.id}`)

  return {
    props: {
      post: data
    }
  }
}

export default Index
