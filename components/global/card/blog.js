import React from 'react'
import { useRouter } from 'next/router'

import calcReadTime from '@ui/utils/calcReadTime'

const Card = ({ post, first, index }) => {
  const router = useRouter()
  const openPost = () => router.push(`/blog/${post._id}`)

  const selectCategory = (category) => {
    if (category === 'inimesed') return 'rgba(0, 112, 243, 1)'
    if (category === 'treening') return 'rgba(43, 233, 163, 1)'
    if (category === 'tervis') return 'rgba(255, 61, 0, 1)'
    if (category === 'toitumine') return 'rgba(124, 29, 201, 1)'
    return 'rgba(43, 233, 163, 1)'
  }

  return <div className={`blog_card ${first && index === 0 ? 'blog_card_first' : ''}`} onClick={openPost}>
    <div className="blog_card_image" style={{ backgroundImage: `url(${post.image})`}} />
    <div className="blog_card_info">
      <h4>{post.title}</h4>
      <span className="aut">{post.author}</span>
      <span className="cate">{post.category}</span>
      <span>{calcReadTime(post.content.data)}</span>
    </div>
    <div className="blog_card_social">
      <i className="far fa-heart"/>
      <span>32</span>
    </div>
    <div className="blog_card_category" style={{ background: selectCategory(post.category) }}/>
  </div>
}


export default Card
