import React, { useEffect } from 'react'

import calcReadTime from '@utils/calcReadTime'

import { usePostState, usePostDispatch } from '@context/post'
import { getPosts } from '@actions/post'

import Section from '@c/apps/landing/section'
import Preview from '@c/global/preview'

const Blog = () => {
  const dispatchPost = usePostDispatch()
  const { posts } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return <Section title={<span>Explore our blog<br/>for useful tips and tricks.</span>} subtitle="Latest posts" button="All posts" link="/blog" column>
    {
      posts
        ? posts.map(post => <Preview
            key={post._id}
            image={post.image}
            title={post.name}
            author={post.author}
            category={post.category}
            readtime={calcReadTime(post.content)}
            rating={post.rating}
          />).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Blog
