import React from 'react'

import calcReadTime from '@ui/utils/calcReadTime'
import breakSentence from '@ui/utils/breakSentence'
// import usePosts from '@hooks/usePosts'
import { useConfigState } from '@context/config'

import Section from '@c/apps/landing/section'
import Card from '@c/global/card/blog'

const Blog = () => {
  // const { posts } = usePosts()
  const { landing } = useConfigState()
  const posts = [{
    _id: 'asd',
    image: "https://images.pexels.com/photos/1302925/pexels-photo-1302925.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    name: "Lower body full attack",
    author: "Keisy Põldsam",
    category: "fitness",
    content: "something",
    rating: 0
  },{
    _id: 'asd1',
    image: "https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    name: "Lower body full attack to be greater than usual.",
    author: "Keisy Põldsam",
    category: "toitumine",
    content: "something",
    rating: 3
  },{
    _id: 'asd2',
    image: "https://images.pexels.com/photos/1302925/pexels-photo-1302925.jpeg?auto=compress&cs=tinysrgb&dpr=1",
    name: "You can do it.",
    author: "Keisy Põldsam",
    category: "fitness",
    content: "something",
    rating: 5
  }]

  return <Section title={ breakSentence(landing.sections.blog.title) } subtitle={ landing.sections.blog.subtitle } button={ landing.sections.blog.button.title } link={ landing.sections.blog.button.link } column icon="fas fa-blog">
    {
      posts
        ? posts.map(post => <Card
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
