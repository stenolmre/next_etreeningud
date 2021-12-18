import React from 'react'
import Link from 'next/link'

import { usePostState } from '@context/post'
import { useConfigState } from '@context/config'

import { LoadingAd } from '@c/loading'

const AdSmall = ({ id }) => {
  const { posts, loading } = usePostState()
  const { writers } = useConfigState()
  const getWriter = (writer) => writers.find(_writer => _writer.slug === writer)

  return <div className="ad_small">
    {
      loading ? <LoadingAd /> : posts && posts.filter(x => x._id !== id).map(post => <Link key={post._id} href={`/posts/${post._id}`}>
        <a className="single_ad">
          <div className="ad_image" style={{ backgroundImage: `url('${post.image}')`}}/>
          <h4>{post.name}</h4>
          <span>#{post.category}</span>
          <div className="post_author">
            <div style={{ backgroundImage: `url('${getWriter(post.writer).image}')`}}/>
            <a target="_blank" rel="noreferrer" href={getWriter(post.writer).social}>@{getWriter(post.writer).name}</a>
          </div>
        </a>
      </Link>).slice(0, 4)
    }
  </div>
}

export { AdSmall }
