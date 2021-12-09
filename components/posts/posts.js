import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'

import { usePostState } from '@context/post'

import Loader from '@c/utils/loader'
import Sidebar from '@c/sidebar'
import Card from '@c/posts/card'
import Pagination from '@c/posts/pagination'

const Posts = () => {
  const { query } = useRouter()

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const { loading, posts } = usePostState()

  const indexOfLastPost = (query.page ? query.page : 1) * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const arr = ['Strength', 'Yoga', 'Mobility', 'HIIT']
  return <Fragment>
    <Sidebar>
      {
        arr.map(x => <span key={x}>{x}</span>)
      }
    </Sidebar>
    <div className="posts_container">
      {
        loading
          ? <div className="page_loader"><Loader /></div>
          : posts && <Fragment>
              <div className="posts">
                {
                  posts.filter(el => query.category ? el.category === query.category : el.category).filter(el => el.name.toLowerCase().includes(query.search ? query.search.toLowerCase() : '')).map(post => <Card key={post._id} post={post}/>).slice(indexOfFirstPost, indexOfLastPost)
                }
              </div>
              <Pagination totalPosts={posts.filter(el => el.name.toLowerCase().includes(query.search ? query.search.toLowerCase() : '')).length} postsPerPage={postsPerPage} totalPages={Math.ceil(posts.filter(el => el.name.toLowerCase().includes(query.search ? query.search.toLowerCase() : '')).length / postsPerPage)} />
            </Fragment>
      }
    </div>
  </Fragment>
}

export default Posts
