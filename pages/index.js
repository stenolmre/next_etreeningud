import React, { Fragment } from 'react'
import Head from '@utils/head'

import Layout from '@c/layout'
import Landing from '@c/landing'

const Index = () => {
  return <Fragment>
    <Head title="eTreeningud" url="https://etreeningud.ee"/>
    <Layout>
      <Landing />
    </Layout>
  </Fragment>
}

export default Index
