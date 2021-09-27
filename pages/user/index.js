import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from 'next/head'

import setAuthToken from '@utils/setAuthToken'
import { useUserState, useUserDispatch } from '@context/user'
import { setUser } from '@actions/user'

import Layout from '@admin/global/layout'

const Index = ({ user }) => {
  const dispatchUser = useUserDispatch()
  useEffect(() => { setUser(dispatchUser, user) }, [])

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
      ? await axios.get('http://localhost:3000/api/admin/get')
      : await axios.get('https://etreeningud.ee/api/admin/get')

    return { user: data.admin }
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end()
  }
}

export default Index
