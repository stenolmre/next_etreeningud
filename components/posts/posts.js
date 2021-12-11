import React, { Fragment } from 'react'

import { usePostState } from '@context/post'
import daysToGo from '@ui/utils/daysToGo'

import Loader from '@c/utils/loader'
import Sidebar from '@c/posts/sidebar'
import Header from '@c/header'
import Card from '@c/card'

const Posts = () => {
  const { loading, posts, filters, sortBy } = usePostState()

  const showPosts = () => {
    if (!posts.length || posts == null) return
    if (!filters.length) return sortPosts(posts)

    return sortPosts(posts).filter(_post => filters.includes(_post.category))
  }

  const sortPosts = (posts) => {
    if (!posts.length || posts == null) return

    return posts.sort((a, b) => {
      if (sortBy === 'newest') {
        if (daysToGo(a.createdAt) > daysToGo(b.createdAt)) return -1
      }

      if (sortBy === 'oldest') {
        if (daysToGo(a.createdAt) < daysToGo(b.createdAt)) return -1
      }

      if (sortBy === 'az') {
        if (a.name < b.name) return -1
      }

      if (sortBy === 'za') {
        if (a.name > b.name) return -1
      }

      return 0
    })
  }

  return <Fragment>
    <Sidebar />
    <Header pills={[...filters, sortBy]} title="Postitused" icon="fas fa-blog" info="Avasta uusi teadmisi meie blogist, kus kirjutame treeningust, tasakaalustatud toitumisest ja tervislikust eluviisist. Samuti teeme tutvust meid ümbritsevate lahedate inimestega."/>
    <div className="cards_container">
      {
        loading ? <div className="page_loader"><Loader /></div> : posts && showPosts().map(post => <Card key={post._id} data={post}/>)
      }
    </div>
  </Fragment>
}

export default Posts
