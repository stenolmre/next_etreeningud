import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useAdminState, useAdminDispatch } from './../../context/admin'
import { loginAdmin } from './../../actions/admin'

const Login = () => {
  const router = useRouter()

  const dispatchAdmin = useAdminDispatch()
  const { error } = useAdminState()

  const [processing, setProcessing] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

  const login = async () => {
    setProcessing(true)

    await loginAdmin(dispatchAdmin, loginData, () => router.push('/private/admin/dashboard'), () => {
      setLoginError(true)
      setProcessing(false)
    })
  }

  return <div className="admin_login_container">
    <div className="admin_login neumorphism">
      <h2>Logi Sisse</h2>
      <label>Email <span className="form_required">*</span></label>
      <input className="inset_neumorphism" name="email" value={loginData.email} onChange={onChange}/>
      <label>Password <span className="form_required">*</span></label>
      <input className="inset_neumorphism" type="password" name="password" value={loginData.password} onChange={onChange}/>
      <button disabled={processing} onClick={login}>{processing ? 'Login sisse..' : 'Logi sisse'}</button>
      {
        loginError && <p className="form_error">{error && error.msg}</p>
      }
    </div>
  </div>
}

export default Login
