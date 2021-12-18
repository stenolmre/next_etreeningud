import React, { useEffect } from 'react'

import { useConfigState, useConfigDispatch } from '@context/config'
import { getConfig } from '@actions/config'

const useFitness = () => {
  const dispatch = useConfigDispatch()
  const config = useConfigState()

  useEffect(() => { getConfig(dispatch) }, [dispatch])

  return config
}

export default useFitness
