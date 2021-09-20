import React, { useEffect } from 'react'

import { usePostState, usePostDispatch } from '@context/post'
import { getPosts } from '@actions/post'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card'

const Blog = () => {
  const dispatchPost = usePostDispatch()
  const { posts } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return <Section title={<span>Explore our blog<br/>for useful tips and tricks.</span>} subtitle="Latest posts" button="All posts" link="/blog">
    {
      posts
        ? posts.map(post => <Card
            key={post._id}
            image={post.image}
            category={post.category}
            equipment={post.equipment}
            title={post.name}
            info={post.intro}
            icon="fas fa-heartbeat"
            date={post.createdAt.slice(0, 10).replaceAll('-', '/')}
          />).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Blog
