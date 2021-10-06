import React, { useEffect } from 'react'

import { useConfigDispatch } from '@context/config'
import { getConfig } from '@actions/config'

const useConfig = () => {
  const dispatchConfig = useConfigDispatch()

  return useEffect(() => { getConfig(dispatchConfig) }, [dispatchConfig])
}

export default useConfig
