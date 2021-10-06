import React from 'react'

import useConfig from '@hooks/useConfig'
import useUser from '@hooks/useUser'

const Init = () => {
  useConfig()
  useUser()

  return null
}

export default Init
