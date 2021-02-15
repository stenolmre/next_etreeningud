import React, { Fragment } from 'react'

import { usePostDispatch } from './../../context/post'
import { useSettingsState } from './../../context/settings'

import Loader from './../utils/loader'
import Feedback from './feedback'
import Writer from './writer'
import Ad from './ad'

const Post = ({ post }) => {
  const dispatchPost = usePostDispatch()
  const { loading, blog_writers } = useSettingsState()

  const content = () => {
    return {__html: `${post.content}`};
  }

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
            : blog_writers && blog_writers.filter(el => el.name.toLowerCase() === post.author.toLowerCase()).map(writer => <Writer key={writer._id} writer={writer} />)
        }
        <Ad id={post._id}/>
      </Fragment>
    }
  </div>
}

export default Post
