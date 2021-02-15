import React, { Fragment, useEffect } from 'react'

import { usePostState, usePostDispatch } from './../../context/post'
import { getPosts } from './../../actions/post'

import Loader from './../utils/loader'
import Card from './card'

const Ad = ({ id }) => {
  const dispatchPost = usePostDispatch()
  const { posts, loading } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  return <Fragment>
    {
      loading
        ? <div className="posts_ad_loader"><Loader/></div>
        : <div className="posts_ad_container">
            <h2>Viimased Postitused</h2>
            <div className="posts_ad">
              {
                posts.filter(x => x._id !== id).map(post => <Card key={post._id} post={post}/>).slice(0, 3)
              }
            </div>
          </div>
    }
  </Fragment>
}

export default Ad
