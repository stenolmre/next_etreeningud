import React, { useState } from 'react'

import sort from '@utils/sort'
import Row from '@c/global/row'

const Fitness = ({ posts, sortBy }) => {
  const [numOfPosts, setNumOfPosts] = useState(10)

  return <div className="page_container">
    <div className="page_col">
      {
        posts && sort(posts, sortBy).map(post => <Row
          key={post._id}
          id={post._id}
          image={post.image}
          category={post.category}
          equipment={post.equipment}
          title={post.name}
          date={post.createdAt.slice(0, 10).replaceAll('-', '/')}
        />).slice(0, numOfPosts)
      }
    </div>
    {
      numOfPosts < posts.length && <span className="load_more" onClick={() => setNumOfPosts(numOfPosts + 10)}>Load more posts..</span>
    }
  </div>
}

export default Fitness
