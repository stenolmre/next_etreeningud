import React from 'react'
import axios from 'axios'
import cookies from 'next-cookies'

import setAuthToken from '@utils/setAuthToken'
import { useUserDispatch } from '@context/user'
import { login } from '@actions/user'

const Login = () => {
  const dispatchUser = useUserDispatch()

  return <div style={{ margin: '2rem' }}>
    <input />
    <input type="password"/>
    <button onClick={() => login(dispatchUser, { email: 'mary@smith.com', password: 'marysmith' }, () => console.log('success'), () => console.log('error'))}>login</button>
  </div>
}

Login.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/admin/get')
      : await axios.get('https://etreeningud.ee/api/admin/get')

    if (data.status === 'success') {
      ctx.res.writeHead(302, { Location: '/user' })
      ctx.res.end()
    }

    return {}
  } catch (err) {
    return { user_token }
  }
}

export default Login
