import React, { useState } from 'react'

import sort from '@utils/sort'
import filter from '@utils/filter'

import Card from '@c/global/card/blog'

const Blog = ({ posts, sortBy, filterBy }) => {
  const [numOfPosts, setNumOfPosts] = useState(10)
  const sortedPosts = posts && sort(filter(posts, filterBy), sortBy)

  return <div className="page_container">
    {
      posts.length && <div>
        {
          sortedPosts.map((post, index) => <Card post={post} key={index} first index={index}/>).slice(0, numOfPosts)
        }
      </div>
    }
    {
      numOfPosts < sortedPosts.length && <div className="load_more" onClick={() => setNumOfPosts(numOfPosts + 10)}>
        <hr />
        <i className="fas fa-plus fs-8 mr-8 ml-16"/>
        <span>Näita rohkem postitusi</span>
        <i className="fas fa-plus fs-8 mr-16 ml-8"/>
        <hr />
      </div>
    }
    {
      sortedPosts.length === 0 && <p>There are zero post to show.</p>
    }
  </div>
}

export default Blog
