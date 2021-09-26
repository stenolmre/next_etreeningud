import React, { useEffect } from 'react'

import sort from '@utils/sort'
import Card from '@c/global/card'

const Fitness = ({ posts, sortBy }) => <div className="page_container">
  <h1>Blog</h1>
  <div className="page">
    {
      posts && sort(posts, sortBy).map(post => <Card
        key={post._id}
        image={post.image}
        category={post.category}
        equipment={post.equipment}
        title={post.name}

        icon="fas fa-heartbeat"
        date={post.createdAt.slice(0, 10).replaceAll('-', '/')}
      />)
    }
  </div>
</div>

export default Fitness
