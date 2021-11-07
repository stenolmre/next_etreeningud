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

  return <div className={`some`}>
    <div className={`author_img`} style={{ backgroundImage: `url(${ author.image })` }}/>
    <div className="n">
      <div className="m">
        <span className="na">{author.name}</span>
        <span>{bio ? 'Treener' : parseDate(post.createdAt)}</span>
        <span>{bio ? 'CEO TalTech Tantsutüdrukud' : calcReadTime(post.content.data)}</span>
      </div>
      <div className="s">
        {
          author.social.map(link => <a key={link._id} href={link.link} target="_blank" rel="noreferrer">
            <i className={link.icon} />
          </a>)
        }
      </div>
    </div>
  </div>
}

export default Author
