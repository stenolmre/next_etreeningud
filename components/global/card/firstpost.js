import React from 'react'
import { useRouter } from 'next/router'

import calcReadTime from '@ui/utils/calcReadTime'

const FirstPost = ({ post }) => {
  const router = useRouter()
  const openPost = () => router.push(`/blog/${post._id}`)

  return <div className="first_post" onClick={openPost}>
    <div className="first_post_image" style={{ backgroundImage: `url(${ post.image })` }}/>
    <div className="first_post_details">
      <h1>{ post.title }</h1>
      <div>
        <span>{post.author}</span>
        <span>{post.category}</span>
        <span>{calcReadTime(post.content.data)}</span>
      </div>
      <div className="first_post_rating">
        {
          [...Array(5)].map((star, i) => <label key={i}>
            <input type="radio" value={i + 1} />
            <i className={(i + 1) <= post.rating ? 'fas fa-star gold' : 'fas fa-star'} />
          </label>)
        }
      </div>
    </div>
  </div>
}

export default FirstPost
