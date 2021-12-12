import React from 'react'
import Link from 'next/link'

import { usePostState } from '@context/post'
import { useWriterState } from '@context/writer'

import Card from '@c/card'

const Ad = ({ id }) => {
  const { posts } = usePostState()
  const { writers } = useWriterState()

  return <div className="ad">
    {
      posts && posts.filter(x => x._id !== id).map(post => <Card key={post._id} data={post}/>).slice(0, 3)
    }
  </div>
}

const AdSmall = ({ id }) => {
  const { posts, loading } = usePostState()
  const { writers } = useWriterState()

  const getAuthor = (author) => {
    if (!writers.length || writers == null || writers.find(writer => writer.name === author) == null) {
      return {
        image: null,
        social: null
      }
    } else {
      const writer = writers.find(writer => writer.name === author)
      return {
        image: writer.image,
        social: writer.social
      }
    }
  }

  return <div className="ad_small">
    {
      posts && posts.filter(x => x._id !== id).map(post => <Link key={post._id} href={`/posts/${post._id}`}>
        <a className="single_ad">
          <div className="ad_image" style={{ backgroundImage: `url('${post.image}')`}}/>
          <h4>{post.name}</h4>
          <span>#{post.category}</span>
          <div className="post_author">
            <div style={{ backgroundImage: `url('${getAuthor(post.author).image}')`}}/>
            <a target="_blank" rel="noreferrer" href={getAuthor(post.author).social}>@{post.author}</a>
          </div>
        </a>
      </Link>).slice(0, 5)
    }
  </div>
}

export { Ad, AdSmall }
