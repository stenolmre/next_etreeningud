import React, { Fragment, useState } from 'react'
import Head from '@utils/head'

import { useFitState } from '@context/fitness'
import { usePostState } from '@context/post'
import sort from '@utils/sort'

import Layout from '@c/layout/layout'
import { MainCard } from '@c/card'
import { LoadingCards } from '@c/loading'

const Index = () => {
  const fit = useFitState()
  const { loading, posts, filters, sortBy } = usePostState()

  const [numOfPosts, setNumOfPosts] = useState(12)

  const showPosts = () => {
    if (!posts.length || posts == null) return []
    if (!filters.length) return sort(posts, sortBy)

    return sort(posts, sortBy).filter(post => filters.includes(post.category.toLowerCase()))
  }

  const loadMorePosts = () => {
    if (numOfPosts > posts.length) return
    setNumOfPosts(numOfPosts + 12)
  }

  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/posts"/>
    <Layout sidebar={fit.fitness && fit.fitness} loading={fit.loading} blog={false} num={7} pills={['blogi', sortBy, ...filters]}>
      <div className="cards_container">
        {
          loading
            ? <LoadingCards />
            : showPosts().map((post, index) => <MainCard key={index} data={post}/>).slice(0, numOfPosts)
        }
      </div>
      {
        showPosts().length > numOfPosts && <div className="load_more" onClick={loadMorePosts}>Näita rohkem postitusi</div>
      }
    </Layout>
  </Fragment>
}

export default Index
