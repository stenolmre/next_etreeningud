import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Row = ({ id, image, title, author, category, readtime, rating }) => {
  const router = useRouter()
  const openPost = () => router.push(`/blog/${id}`)

  return <div className="row" onClick={openPost}>
    <Image src={image} alt={title}/>
    <div className="row_details">
      <h4>{title}</h4>
      <div>
        <span>{author}</span>
        <span>{category}</span>
        <span>{readtime} read</span>
      </div>
    </div>
    <div className="row_rating">
      {
        [...Array(5)].map((star, i) => <label key={i}>
          <input type="radio" value={i + 1} />
          <i className={(i + 1) <= rating ? 'fas fa-star gold' : 'fas fa-star'} />
        </label>)
      }
    </div>
  </div>
}


export default Row
