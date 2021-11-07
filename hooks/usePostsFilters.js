import React, { useEffect } from 'react'
import { usePostState } from '@context/post'

const usePostsFilters = () => {
  const { posts } = usePostState()

  let categories = {}
  let authors = {}

  posts && posts.map(post => post.category).forEach(category => {
    if (!categories.hasOwnProperty(category.toLowerCase())) categories[category.toLowerCase()] = 0
    return categories[category.toLowerCase()] = categories[category.toLowerCase()] + 1
  })

  posts && posts.map(post => post.author).forEach(author => {
    if (!authors.hasOwnProperty(author)) authors[author] = 0
    return authors[author] = authors[author] + 1
  })

  return { categories, authors }
}

export default usePostsFilters
