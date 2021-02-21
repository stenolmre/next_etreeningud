import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import cookies from 'next-cookies'
import Head from './../../../components/utils/head'

import setAuthToken from './../../../utils/setAuthToken'
import { useAdminDispatch } from './../../../context/admin'
import { getAdmin } from './../../../actions/admin'

import AdminsContent from './../../../components/admin/admins/admins'

const Admins = ({ user_token }) => {
  const dispatchAdmin = useAdminDispatch()

  useEffect(() => { getAdmin(dispatchAdmin, user_token) }, [dispatchAdmin, user_token])

  return <Fragment>
    <Head title="Administraatorid"/>
    <AdminsContent />
  </Fragment>
}

Admins.getInitialProps = async ctx => {
  const { user_token } = cookies(ctx) || ''

  try {
    setAuthToken(user_token)

    const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? await axios.get('http://localhost:3000/api/admin/get')
      : await axios.get('https://next-etreeningud.vercel.app/api/admin/get')

    return { user_token, name: data.admin.name }
  } catch (err) {
    ctx.res.writeHead(302, { Location: '/private/login' });
    ctx.res.end()
  }
}

export default Admins
