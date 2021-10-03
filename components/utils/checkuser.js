import React, { Fragment, useEffect } from 'react'

import { useUserDispatch, useUserState } from '@context/user'
import { getUser } from '@actions/user'

import useConfig from '@hooks/useConfig'

const CheckUser = () => {
  const dispatchUser = useUserDispatch()
  useEffect(() => { getUser(dispatchUser) }, [dispatchUser])
  useConfig()

  return <Fragment></Fragment>
}

export default CheckUser
