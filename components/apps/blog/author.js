import React from 'react'

import parseDate from '@ui/utils/parseDate'
import calcReadTime from '@ui/utils/calcReadTime'

import { useConfigState } from '@context/config'

const Author = ({ post, bio }) => {
  const { blog } = useConfigState()
  let author
  author = blog.authors.find(author => post.author === author.name)

  if (author == null) {
    author = {
      image: '',
      name: post.author,
      social: []
    }
  }

  return <div className={`author_details${bio ? '_bio' : ''}`}>
    <div className={`author_details_image${bio ? '_bio' : ''}`} style={{ backgroundImage: `url(${ author.image })` }}/>
    <div>
      <span className="author_details_name">{author.name}</span>
      <span>{bio ? 'Treener' : parseDate(post.createdAt)}</span>
      <span>{bio ? 'CEO TalTech Tantsutüdrukud' : calcReadTime(post.content.data)}</span>
    </div>
    <div className="author_details_social">
      {
        author.social.map(link => <a key={link._id} href={link.link} target="_blank" rel="noreferrer">
          <i className={link.icon} />
        </a>)
      }
    </div>
  </div>
}

export default Author
