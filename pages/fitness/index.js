import React, { Fragment } from 'react'
import Head from '@utils/head'

import Layout from '@c/layout'
import FitnessContent from '@c/fitness/fitness'

const Fitness = () => {
  return <Fragment>
    <Head title="Treeningud" url="https://etreeningud.ee/fitness"/>
    <Layout>
      <FitnessContent />
    </Layout>
  </Fragment>
}

export default Fitness
