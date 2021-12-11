import React, { useEffect } from 'react'

import { useWriterState, useWriterDispatch } from '@context/writer'
import { getWriters } from '@actions/writer'

const useWriters = () => {
  const dispatch = useWriterDispatch()
  const { writers } = useWriterState()

  useEffect(() => {
    if (writers == null || !writers.length) getWriters(dispatch)
  }, [dispatch])

  return writers
}

export default useWriters
