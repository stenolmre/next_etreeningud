import React, { Fragment, useEffect } from 'react'

import { useUserDispatch } from '@context/user'
import { getUser } from '@actions/user'

const CheckUser = () => {
  const dispatchUser = useUserDispatch()

  useEffect(() => { getUser(dispatchUser) }, [dispatchUser])

  return <Fragment></Fragment>
}

export default CheckUser
