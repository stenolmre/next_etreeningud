import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import cookies from 'next-cookies'

import setAuthToken from '@utils/setAuthToken'
import { useUserState, useUserDispatch } from '@context/user'
import { login } from '@actions/user'
import useForm from '@hooks/useForm'

import Layout from '@c/global/layout'
import Dots from '@c/global/dots'
import Footer from '@c/global/footer'

const Login = () => {
  const router = useRouter()
  const dispatchUser = useUserDispatch()
  const { error } = useUserState()

  const [data, setData] = useState({ email: '', password: '' })
  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const [showError, setShowError] = useState(false)
  const form = useForm({ email: 'Email', password: 'Password' }, data, setData)

  const submit = e => {
    e.preventDefault()
    login(dispatchUser, data, () => router.push('/user'), () => setShowError(true))
  }

  return <Layout>
    <div className="auth_container">
      <div className="auth">
        <h1>
          <Dots num={20} className="auth_top_dots"/>
          <span>Connect to our community for better progress.</span>
        </h1>
        <span>By doing together, you will inspire others and get enough motivation to get through the hard days.</span>
      </div>
      <form onSubmit={submit}>
        <h3>Logi sisse</h3>
        { form }
        <button>login</button>
        {
          error != null && showError && <span className="error_message">{error.msg}</span>
        }
        <Dots num={48} className="auth_bottom_dots"/>
      </form>
    </div>
    <Footer />
  </Layout>
}

Login.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/user')
      : await axios.get('https://etreeningud.ee/api/user')

    if (data != null) {
      ctx.res.writeHead(302, { Location: '/user' })
      ctx.res.end()
    }

    return { data }
  } catch (err) {
    return { user_token }
  }
}

export default Login
