import React, { Fragment, useEffect, useState } from 'react'

import { useWriterState } from '@context/writer'
import { useAnalyticDispatch } from '@context/analytic'
import { addAnalytic } from '@actions/analytic'

import { Ad, AdSmall } from '@c/posts/ad'

const Post = ({ post }) => {
  const { writers } = useWriterState()
  const dispatchAnalytic = useAnalyticDispatch()

  const content = () => {
    return {__html: `${post.content}`}
  }

  const [isAnalyized, setIsAnalyized] = useState(false)

  const analyize = async () => {
    await addAnalytic(dispatchAnalytic, { id: post._id, category: 'blog' }, () => setIsAnalyized(true))
  }

  useEffect(() => {
    if (!isAnalyized && process.env.NODE_ENV !== 'development') {
      analyize()
    }
  }, [isAnalyized, dispatchAnalytic])

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

  return <div className="post">
    {
      post && <Fragment>
        <div className="post_container">
          <div>
            <h1>{post.name}</h1>
            <div className="post_author">
              <div style={{ backgroundImage: `url('${getAuthor(post.author).image}')`}}/>
              <a target="_blank" rel="noreferrer" href={getAuthor(post.author).social}>@{post.author}</a>
            </div>
            <div className="post" dangerouslySetInnerHTML={content()}/>
          </div>
          <AdSmall id={post._id}/>
        </div>
        <Ad id={post._id}/>
      </Fragment>
    }
  </div>
}

export default Post
