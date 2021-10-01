import React, { useEffect } from 'react'

import calcReadTime from '@utils/calcReadTime'
import usePosts from '@hooks/usePosts'

import Section from '@c/apps/landing/section'
import Row from '@c/global/row'

const Blog = () => {
  const { posts } = usePosts()

  return <Section title={<span>Explore our blog<br/>for useful tips and tricks.</span>} subtitle="Uusimad postitused" button="Postitused" link="/blog" column>
    {
      posts
        ? posts.map(post => <Row
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
