import React from 'react'

import parseDate from '@utils/parseDate'

const Preview = ({ image, title, author, category, readtime, rating }) => <div className="preview">
  <img src={image} alt={title}/>
  <div className="preview_details">
    <h4>{title}</h4>
    <div>
      <span>{author}</span>
      <span>{category}</span>
      <span>{readtime} read</span>
    </div>
  </div>
  <div className="preview_rating">
    {
      [...Array(5)].map((star, i) => <label key={i}>
        <input type="radio" value={i + 1} />
        <i className={(i + 1) <= rating ? 'fas fa-star gold' : `fas fa-star`} />
      </label>)
    }
  </div>
</div>


export default Preview
