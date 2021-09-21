import React from 'react'

import usePosts from '@hooks/usePosts'
import { usePostDispatch } from '@context/post'
import { addPostFilter } from '@actions/post'

import Sidebar from '@c/global/sidebar'

const BlogSidebar = () => {
  const dispatchPost = usePostDispatch()
  const { sortBy } = usePosts()

  return <Sidebar>
    <h4>Filter</h4>
    {
      Object.entries(sortBy).map(([key, value]) => <div key={key} className={sortBy[key] ? 'active' : ''} onClick={() => addPostFilter(dispatchPost, { [key]: true })}>{key}</div>)
    }
  </Sidebar>
}

export default BlogSidebar
