import React, { Fragment } from 'react'
import axios from 'axios'

import Post from '@c/apps/blog/post'

const Index = ({ post }) => {
  return <Fragment>
    <Post post={post}/>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/posts?id=${id}`)
    : await axios.get(`https://etreeningud.ee/api/posts?id=${id}`)

  return { post: data }
}

export default Index
