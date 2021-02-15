import React, { Fragment } from 'react'
import Head from './../../components/utils/head'

import Layout from './../../components/layout'
import FitnessContent from './../../components/fitness/fitness'

const Fitness = () => {
  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/fitness"/>
    <Layout>
      <FitnessContent />
    </Layout>
  </Fragment>
}

export default Fitness
