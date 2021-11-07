import React from 'react'

import usePostsFilters from '@hooks/usePostsFilters'
import { usePostDispatch } from '@context/post'
import { addPostFilter } from '@actions/post'
import capitalize from '@ui/utils/capitalize'

import Sidebar from '@c/global/sidebar'

const BlogSidebar = ({ filterBy, sortBy }) => {
  const dispatchPost = usePostDispatch()
  const { categories, authors } = usePostsFilters()

  return <Sidebar>
    <h4>Sortreeri</h4>
    {
      Object.keys(sortBy).map(key => <div key={key} className={sortBy[key] ? 'active' : ''} onClick={() => addPostFilter(dispatchPost, { [key]: true })}>{key}</div>)
    }
    <h4>Filtreeri kategooria järgi</h4>
    <All name="category" filter={filterBy.category} dispatchPost={dispatchPost}/>
    {
      categories && Object.keys(categories).map(category => <div key={category} className={filterBy.category === category ? 'active' : ''} onClick={() => addPostFilter(dispatchPost, { category: category })}>{capitalize(category)}</div>)
    }
    <h4>Filtreeri autori järgi</h4>
    <All name="author" filter={filterBy.author} dispatchPost={dispatchPost}/>
    {
      authors && Object.keys(authors).map(author => <div key={author} className={filterBy.author === author ? 'active' : ''} onClick={() => addPostFilter(dispatchPost, { author })}>{author}</div>)
    }
  </Sidebar>
}

export default BlogSidebar

const All = ({ filter, dispatchPost, name }) => <div className={filter == null ? 'active' : ''} onClick={() => addPostFilter(dispatchPost, { [name]: null })}>All</div>
