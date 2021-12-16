import React, { Fragment } from 'react'
import Head from '@utils/head'

import { useFitState } from '@context/fitness'
import { usePostState } from '@context/post'
import sort from '@utils/sort'

import Layout from '@c/layout/layout'
import { MainCard } from '@c/card'
import { LoadingCards } from '@c/loading'

const Index = () => {
  const { fitness } = useFitState()
  const { loading, posts, filters, sortBy } = usePostState()

  const showPosts = () => {
    if (!posts.length || posts == null) return
    if (!filters.length) return sort(posts, sortBy)

    return sort(posts, sortBy).filter(post => filters.includes(post.category.toLowerCase()))
  }

  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/posts"/>
    <Layout sidebar={fitness && fitness} pills={[sortBy, ...filters]}>
      <div className="cards_container">
        {
          loading
            ? <LoadingCards />
            : showPosts().map((post, index) => <MainCard key={index} data={post}/>).slice(0, 12)
        }
      </div>
    </Layout>
  </Fragment>
}

export default Index
