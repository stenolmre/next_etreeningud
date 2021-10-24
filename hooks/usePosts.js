import React, { useEffect } from 'react'

import { usePostState, usePostDispatch } from '@context/post'
import { getPosts } from '@actions/post'

const usePosts = () => {
  const dispatchPost = usePostDispatch()
  const posts = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return posts
}

export default usePosts
