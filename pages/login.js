import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import cookies from 'next-cookies'

import setAuthToken from '@utils/setAuthToken'
import { useUserState, useUserDispatch } from '@context/user'
import { login } from '@actions/user'

const Login = () => {
  const router = useRouter()
  const dispatchUser = useUserDispatch()
  const { error } = useUserState()

  const [data, setData] = useState({ email: '', password: '' })
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    login(dispatchUser, data, () => router.push('/user'))
  }

  return <div style={{ margin: '2rem' }}>
    <form onSubmit={submit}>
      <input name="email" value={data.email} onChange={onChange}/>
      <input type="password" name="password" value={data.password} onChange={onChange}/>
      <button>login</button>
      {
        error != null && <span>{error.msg}</span>
      }
    </form>
  </div>
}

Login.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/user')
      : await axios.get('https://etreeningud.ee/api/user')

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
