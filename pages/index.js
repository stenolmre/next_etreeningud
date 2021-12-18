import React, { Fragment, useState } from 'react'
import Head from '@utils/head'

import { useFitState } from '@context/fitness'
import { usePostState } from '@context/post'
import sort from '@utils/sort'

import Layout from '@c/layout/layout'
import { MainCard } from '@c/card'
import { LoadingCards } from '@c/loading'

const Index = () => {
  const { loading, fitness, filters, sortBy } = useFitState()
  const blog = usePostState()

  const [numOfPosts, setNumOfPosts] = useState(12)

  const showFitness = () => {
    if (!fitness.length || fitness == null) return []
    if (!filters.length) return sort(fitness, sortBy)

    return sort(fitness, sortBy).filter(_fit => filters.includes(_fit.category.toLowerCase()))
  }

  const loadMoreWorkouts = () => {
    if (numOfPosts > fitness.length) return
    setNumOfPosts(numOfPosts + 12)
  }

  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/"/>
    <Layout sidebar={blog.posts && blog.posts} loading={blog.loading} pills={['treeningud', sortBy, ...filters]}>
      <div className="cards_container">
        {
          loading
            ? <LoadingCards />
            : showFitness().map((fit, index) => <MainCard key={index} data={fit} blog={false}/>).slice(0, numOfPosts)
        }
      </div>
      {
        showFitness().length > numOfPosts && <div className="load_more" onClick={loadMoreWorkouts}>Näita rohkem treeninguid</div>
      }
    </Layout>
  </Fragment>
}

export default Index
