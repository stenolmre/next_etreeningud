import React from 'react'
import Link from 'next/link'

import { ShowRating } from './rating'

export default function Card({ post }) {
  return <Link href={`/posts/${post._id}?name=${post.name.replaceAll(' ', '-')}`}><a className="blog_card">
    <div className="blog_card_img neumorphism">
      <img src={post.image} alt={post.name}/>
    </div>
    <div className="blog_card_info">
      <p>{post.author}</p>
      <ShowRating rating={Math.ceil((post.ratings.length === 0 ? 0 : post.ratings.map(item => item.rating).reduce((prev, next) => prev + next, 0)) / post.ratings.length)}/>
    </div>
    <div className="blog_card_content">
      <h3>{post.name}</h3>
      <p>{post.excerpt.substring(0, 105)}</p>
    </div>
    <div className="blog_card_bottom_info">
      <p>
        {
          post.category.toLowerCase() === 'toitumine'
            ? <i className="fas fa-apple-alt"/>
            : post.category.toLowerCase() === 'treening'
              ? <i className="fas fa-running"/>
              : post.category.toLowerCase() === 'tervis'
                ? <i className="fas fa-heartbeat"/>
                : <i className="fas fa-users"/>
        }
      </p>
      <p>{new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  </a></Link>
}
