import React from 'react'

import calcReadTime from '@utils/calcReadTime'
import breakSentence from '@utils/breakSentence'
import usePosts from '@hooks/usePosts'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'
import Row from '@c/global/row'

const Blog = () => {
  const { posts } = usePosts()
  const { landing } = useConfigState()

  return <Section title={ breakSentence(landing.sections.blog.title) } subtitle={ landing.sections.blog.subtitle } button={ landing.sections.blog.button.title } link={ landing.sections.blog.button.link } column>
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
