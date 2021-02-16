import React, { Fragment } from 'react'
import Head from './../components/utils/head'

import Layout from './../components/layout'
import ContactContent from './../components/contact/contact'

const Contact = () => {
  return <Fragment>
    <Head title="Kontakt"/>
    <Layout>
      <ContactContent />
    </Layout>
  </Fragment>
}

export default Contact
