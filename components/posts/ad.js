import React, { Fragment } from 'react'

import { usePostState } from '@context/post'

import Loader from '@c/utils/loader'
import Card from '@c/card'

const Ad = ({ id }) => {
  const { posts, loading } = usePostState()

  return <Fragment>
    {
      loading
        ? <div className="posts_ad_loader"><Loader/></div>
        : <div className="cards_container">
          {
            posts.filter(x => x._id !== id).map(post => <Card key={post._id} data={post}/>).slice(0, 3)
          }
        </div>
    }
  </Fragment>
}

export default Ad
