import React, { Fragment, useEffect, useState } from 'react'

import getAuthor from '@utils/getAuthor'

import { useConfigState } from '@context/config'
import { useAnalyticDispatch } from '@context/analytic'
import { addAnalytic } from '@actions/analytic'

import { AdSmall } from '@c/posts/ad'

const Post = ({ post }) => {
  const { writers } = useConfigState()
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

  return <div className="post">
    {
      post && <Fragment>
        <div className="post_container">
          <div>
            <h1>{post.name}</h1>
            <div className="post_author">
              <div style={{ backgroundImage: `url('${getAuthor(post, writers).image}')`}}/>
              <a target="_blank" rel="noreferrer" href={getAuthor(post, writers).social}>@{getAuthor(post, writers).name}</a>
            </div>
            <div className="post" dangerouslySetInnerHTML={content()}/>
          </div>
          <AdSmall id={post._id}/>
        </div>
      </Fragment>
    }
  </div>
}

export default Post
