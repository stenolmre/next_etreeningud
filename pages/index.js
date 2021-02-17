import React, { Fragment } from 'react'
import Head from './../components/utils/head'

import Layout from './../components/layout'
import Landing from './../components/landing/landing'

const Index = () => {
  return <Fragment>
    <Head title="eTreeningud" />
    <Layout landing>
      <Landing />
    </Layout>
  </Fragment>
}

export default Index
