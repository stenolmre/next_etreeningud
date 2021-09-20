import React, { useEffect } from 'react'

import { usePostState, usePostDispatch } from '@context/post'
import { getPosts } from '@actions/post'

import Card from '@c/global/card'

const Fitness = () => {
  const dispatchPost = usePostDispatch()
  const { posts } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return <div className="page_container">
    <h1>Blog</h1>
    <div className="page">
      {
        posts && posts.map(post => <Card
          key={post._id}
          image={post.image}
          category={post.category}
          equipment={post.equipment}
          title={post.name}

          icon="fas fa-heartbeat"
          date={post.createdAt.slice(0, 10).replaceAll('-', '/')}
        />)
      }
    </div>
  </div>
}

export default Fitness
