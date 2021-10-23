import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Card = ({ id, image, title, author, category, readtime, rating }) => {
  const router = useRouter()
  const openPost = () => router.push(`/blog/${id}`)

  return <div className="blog_card" onClick={openPost}>
    <Image src={image} alt={title} width={75} height={61} />
    <div className="blog_card_details">
      <h4>{title}</h4>
      <div>
        <span>{author}</span>
        <span>{category}</span>
        <span>{readtime}</span>
      </div>
    </div>
    <div className="blog_card_rating">
      {
        [...Array(5)].map((star, i) => <label key={i}>
          <input type="radio" value={i + 1} />
          <i className={(i + 1) <= rating ? 'fas fa-star gold' : 'fas fa-star'} />
        </label>)
      }
    </div>
  </div>
}


export default Card
