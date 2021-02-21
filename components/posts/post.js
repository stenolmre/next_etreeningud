import React, { Fragment, useEffect, useState } from 'react'

import { usePostDispatch } from './../../context/post'
import { useWriterState, useWriterDispatch } from './../../context/writer'
import { getWriters } from './../../actions/writer'
import { useAnalyticDispatch } from './../../context/analytic'
import { addAnalytic } from './../../actions/analytic'

import Loader from './../utils/loader'
import Feedback from './feedback'
import Writer from './writer'
import Ad from './ad'

const Post = ({ post }) => {
  const dispatchWriter = useWriterDispatch()
  const { writers } = useWriterState()
  const dispatchPost = usePostDispatch()
  const { loading, blog_writers } = useWriterState()
  const dispatchAnalytic = useAnalyticDispatch()

  useEffect(() => { getWriters(dispatchWriter) }, [dispatchWriter])

  const content = () => {
    return {__html: `${post.content}`};
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
        <div className="blog_post">
          <h1>{post.name}</h1>
          <h4 className="blog_post_author">autor: {post.author}</h4>
          <div dangerouslySetInnerHTML={content()}/>
        </div>
        <Feedback post={post}/>
        {
          loading
            ? <div><Loader /></div>
            : writers && writers.filter(el => el.name.toLowerCase() === post.author.toLowerCase()).map(writer => <Writer key={writer._id} writer={writer} />)
        }
        <Ad id={post._id}/>
      </Fragment>
    }
  </div>
}

export default Post
