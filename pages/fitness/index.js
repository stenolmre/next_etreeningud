import React, { Fragment } from 'react'
import Head from 'next/head'

import useFitness from '@hooks/useFitness'

import Layout from '@c/global/layout'
import Sidebar from '@c/apps/fitness/sidebar'
import Fitness from '@c/apps/fitness/fitness'

const Index = () => {
  const { fitness, sortBy, filterBy } = useFitness()
  return <Fragment>
    <Head>
        <title>eTreeningud</title>
    </Head>
    <Layout>
      <Sidebar sortBy={sortBy} filterBy={filterBy}/>
      <Fitness fitness={fitness} sortBy={sortBy} filterBy={filterBy}/>
    </Layout>
  </Fragment>
}

export default Index
