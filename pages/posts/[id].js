import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@utils/head'

import PostContent from '@c/posts/post'
import Footer from '@c/layout/footer'

const Some = ({ post }) => {
  return <Fragment>
    <Head title={post.name} url={`https://etreeningud.ee/posts/${post._id}?name=${post.name}`} image={post.image} description={post.excerpt}/>
    <PostContent post={post}/>
    <Footer />
  </Fragment>
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

export default Some
