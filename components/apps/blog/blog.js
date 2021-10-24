import React, { useState } from 'react'

import sort from '@utils/sort'

import Card from '@c/global/card/blog'
import FirstPost from '@c/global/card/firstpost'

const Blog = ({ posts, sortBy }) => {
  const [numOfPosts, setNumOfPosts] = useState(10)
  const sortedPosts = posts && sort(posts, sortBy)

  return <div className="page_container">
    {
      posts.length && <div className="page_col">
        <FirstPost post={sortedPosts[0]} />
        {
          sortedPosts.map((post, index) => <Card post={post} key={index}/>).slice(1, numOfPosts)
        }
      </div>
    }
    {
      numOfPosts < posts.length && <div className="load_more" onClick={() => setNumOfPosts(numOfPosts + 10)}>
        <hr />
        <i className="fas fa-plus fs-8 mr-8 ml-16"/>
        <span>Näita rohkem postitusi</span>
        <i className="fas fa-plus fs-8 mr-16 ml-8"/>
        <hr />
      </div>
    }
  </div>
}

export default Blog
