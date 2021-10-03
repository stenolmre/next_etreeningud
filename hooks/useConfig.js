import React, { useEffect } from 'react'

import { useConfigDispatch, useConfigState } from '@context/config'
import { getConfig } from '@actions/config'

const useConfig = () => {
  const dispatch = useConfigDispatch()

  return useEffect(() => {
    getConfig(dispatch)
  }, [dispatch])
}

export default useConfig
