import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Pagination = ({ totalPosts, postsPerPage, totalPages }) => {
  const router = useRouter()
  const currentPage = router.query.page ? parseInt(router.query.page) : 1

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => router.push(`/posts?page=${pageNumber}`)

  const paginateToNext = () => currentPage === totalPages ? () => router.push(`/posts?page=${totalPages}`) : () => router.push(`/posts?page=${currentPage + 1}`)

  const paginateToPrevious = () => currentPage === 1 ? () => router.push(`/posts?page=1`) : () => router.push(`/posts?page=${currentPage - 1}`)

  const paginateRight = (number) => {
    paginateToNext(number)
    window.scrollTo({ top: 0, left: 0 })
  }

  const paginateLeft = (number) => {
    paginateToPrevious(number)
    window.scrollTo({ top: 0, left: 0 })
  }

  const paginateNum = (number) => {
    paginate(number)
    window.scrollTo({ top: 0, left: 0 })
  }

  return <div className="pagination">
    <button disabled={currentPage === 1} onClick={paginateLeft}>↞</button>
    {
      pageNumbers.map(number => <button
        key={number + 1}
        onClick={() => paginateNum(number)}
        style={currentPage === number ? activeStyle : inActiveStyle }>
          {number}
      </button>)
    }
    <button disabled={totalPages === currentPage} onClick={paginateRight}>↠</button>
  </div>
}

export default Pagination

const activeStyle = {
  color: 'white',
  background: 'rgb(0, 112, 243)',
  boxShadow: '0px 1px 11px rgb(0, 112, 243, .4)'
}

const inActiveStyle = { color: 'rgb(0, 112, 243)' }
