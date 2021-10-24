import React from 'react'

import calcReadTime from '@ui/utils/calcReadTime'
import breakSentence from '@ui/utils/breakSentence'
import usePosts from '@hooks/usePosts'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card/blog'

const Blog = () => {
  const { posts } = usePosts()
  const { landing } = useConfigState()

  return <Section title={ breakSentence(landing.sections.blog.title) } subtitle={ landing.sections.blog.subtitle } button={ landing.sections.blog.button.title } link={ landing.sections.blog.button.link } column icon="fas fa-blog">
    {
      posts
        ? posts.map(post => <Card post={post} key={post._id}/>).slice(0, 3)
        : <h2>Loading..</h2>
    }
  </Section>
}

export default Blog
