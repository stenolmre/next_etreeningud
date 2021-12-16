import React, { Fragment } from 'react'
import Head from '@utils/head'

import { useFitState } from '@context/fitness'
import { usePostState } from '@context/post'
import sort from '@utils/sort'

import Layout from '@c/layout/layout'
import { MainCard } from '@c/card'
import { LoadingCards } from '@c/loading'

const Index = () => {
  const { loading, fitness, filters, sortBy } = useFitState()
  const { posts } = usePostState()

  const showFitness = () => {
    if (!fitness.length || fitness == null) return
    if (!filters.length) return sort(fitness, sortBy)

    return sort(fitness, sortBy).filter(_fit => filters.includes(_fit.category.toLowerCase()))
  }

  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/"/>
    <Layout sidebar={posts && posts} pills={[sortBy, ...filters]}>
      <div className="cards_container">
        {
          loading
            ? <LoadingCards />
            : showFitness().map((fit, index) => <MainCard key={index} data={fit} blog={false}/>).slice(0, 12)
        }
      </div>
    </Layout>
  </Fragment>
}

export default Index
