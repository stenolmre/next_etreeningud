import React from 'react'

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

export default Login
