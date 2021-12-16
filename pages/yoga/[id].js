import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@utils/head'

import Layout from '@c/layout/layout'
import { MainCard } from '@c/card'

const Yoga = ({ yoga }) => {
  return <Fragment>
    <Head title={yoga.name} url={`https://etreeningud.ee/yoga/${yoga._id}?name=${yoga.name}`} image={yoga.image} description={yoga.intro}/>
    <Layout>
      <div className="yoga_layout">
        <MainCard data={yoga} events={false}/>
        <iframe src={`https://www.youtube.com/embed/${yoga.video}`} frameBorder="0" allowFullScreen/>
      </div>
    </Layout>
  </Fragment>
}

export async function getServerSideProps(ctx) {
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
  const { data } = await axios.get(`${base}${ctx.req.headers.host}/api/fitness/get?id=${ctx.query.id}`)

  return {
    props: {
      yoga: data
    }
  }
}

export default Yoga
