import React from 'react'

import parseDate from '@utils/parseDate'

const Preview = ({ image, title, author, category, readtime, date }) => {
  return <div className="preview">
    <img src={image} alt={title}/>
    <div>
      <h4>{title}</h4>
      <span>{author}</span>
      <span>{category}</span>
      <span>{readtime}</span>
      <span>{date}</span>
    </div>
    <div>Rating</div>
  </div>
}

export default Preview
