import React, { Fragment } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import setAuthToken from '@utils/setAuthToken'

import Layout from '@admin/global/layout'
const Editor = dynamic(
  () => import('@admin/blog/editor'),
  { ssr: false }
)

const Index = () => {
  return <Fragment>
    <Head>
      <title>User</title>
    </Head>
    <Layout>
      <Editor />
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/user')
      : await axios.get('https://etreeningud.ee/api/user')

    return { data }
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }
}

export default Index
