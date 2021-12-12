import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@c/utils/head'

import Layout from '@c/layout'
import Card from '@c/card'

const Yoga = ({ yoga }) => {
  return <Fragment>
    <Head title={yoga.name} url={`https://etreeningud.ee/yoga/${yoga._id}?name=${yoga.name}`} image={yoga.image} description={yoga.intro}/>
    <Layout>
      <div className="yoga_layout">
        <Card data={yoga} events={false}/>
        <iframe src={`https://www.youtube.com/embed/${yoga.video}`} frameBorder="0" allowFullScreen/>
      </div>
    </Layout>
  </Fragment>
}

Yoga.getInitialProps = async ctx => {
  const id = await ctx.query.id
  const host = await ctx.req.headers.host
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'

  const { data } = await axios.get(base + host + '/api/fitness/get?id=' + id)
  return { yoga: data }
}

export default Yoga
