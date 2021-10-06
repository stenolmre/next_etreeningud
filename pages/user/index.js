import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from 'next/head'

import setAuthToken from '@utils/setAuthToken'

import Layout from '@admin/global/layout'

const Index = () => {
  return <Fragment>
    <Head>
      <title>User</title>
    </Head>
    <Layout>

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
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end()
  }
}

export default Index
