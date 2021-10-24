import React from 'react'
import { useRouter } from 'next/router'

import calcReadTime from '@ui/utils/calcReadTime'

const Card = ({ post }) => {
  const router = useRouter()
  const openPost = () => router.push(`/blog/${post._id}`)

  return <div className="blog_card" onClick={openPost}>
    <div className="blog_card_image" style={{ backgroundImage: `url(${ post.image })` }}/>
    <div className="blog_card_details">
      <h4>{post.title}</h4>
      <div>
        <span>{post.author}</span>
        <span>{post.category}</span>
        <span>{calcReadTime(post.content.data)}</span>
      </div>
    </div>
    <div className="blog_card_rating">
      {
        [...Array(5)].map((star, i) => <label key={i}>
          <input type="radio" value={i + 1} />
          <i className={(i + 1) <= post.rating ? 'fas fa-star gold' : 'fas fa-star'} />
        </label>)
      }
    </div>
  </div>
}


export default Card
