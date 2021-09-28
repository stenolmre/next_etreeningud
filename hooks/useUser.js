import React, { useEffect } from 'react'

import { useUserState, useUserDispatch } from '@context/user'
import { getUser } from '@actions/user'

const useUser = () => {
  const dispatchUser = useUserDispatch()
  const user = useUserState()

  if (user.user == null) useEffect(() => { getUser(dispatchUser) }, [dispatchUser])

  return user
}

export default useUser