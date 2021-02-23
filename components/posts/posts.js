import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { usePostState, usePostDispatch } from './../../context/post'
import { getPosts } from './../../actions/post'

import Loader from './../utils/loader'
import Searchbar from './../utils/searchbar'
import Card from './card'
import Pagination from './pagination'

const Posts = () => {
  const { query } = useRouter()

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const dispatchPost = usePostDispatch()
  const { loading, posts } = usePostState()

  useEffect(() => { getPosts(dispatchPost) }, [dispatchPost])

  const indexOfLastPost = (query.page ? query.page : 1) * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  return <Fragment>
    <Searchbar onChange={e => setSearch(e.target.value)} placeholder="Otsi postitust" href={`/posts?search=${search}`}/>
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
