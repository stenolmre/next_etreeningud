import React, { useEffect } from 'react'

import { usePostState, usePostDispatch } from '@context/post'
import { getPosts } from '@actions/post'

const useFitness = () => {
  const dispatch = usePostDispatch()
  const { posts } = usePostState()

  useEffect(() => {
    if (posts == null || !posts.length) getPosts(dispatch)
  }, [dispatch])

  return posts
}

export default useFitness
