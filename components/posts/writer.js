import React from 'react'

export default function Writer({ writer }) {
  return <div className="writer">
    <div>
      <div className="writer_img neumorphism">
        <img src={writer.image} alt={writer.name}/>
      </div>
      <h4>{writer.name}</h4>
      <div>
        {
          writer.social_links.map(x => <a key={x.social_link} rel="noreferrer" target="_blank" href={x.social_link}>
            <i className={x.social_icon}/>
          </a>)
        }
      </div>
    </div>
    <div>
      <p>{writer.bio}</p>
    </div>
  </div>
}
