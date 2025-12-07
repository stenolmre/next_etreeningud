import React, { Fragment } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from './../../components/utils/head'

import setAuthToken from './../../utils/setAuthToken'

import LoginForm from './../../components/admin/login'

const Login = () => {
  return <Fragment>
    <Head title="Logi Sisse"/>
    <LoginForm/>
  </Fragment>
}


Login.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/admin/get')
      : await axios.get('https://etreeningud.ee/api/admin/get')

    if (data.status === 'success') {
      ctx.res.writeHead(302, { Location: '/private/admin/dashboard' })
      ctx.res.end()
    }

    return { user_token }
  } catch (err) {
    return { user_token }
  }
}

export default Login
