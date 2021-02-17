import React, { Fragment } from 'react'
import axios from 'axios'
import Head from './../../components/utils/head'

import YogaContent from './../../components/fitness/yoga'

const Yoga = ({ yoga }) => {
  return <Fragment>
    <Head title={yoga.name} url={`https://etreeningud.ee/fitness/${yoga._id}?name=${yoga.name}`} image={yoga.image} description={yoga.excerpt}/>
    <YogaContent yoga={yoga}/>
  </Fragment>
}

Yoga.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/fitness/get?id=${id}`)
    : await axios.get(`https://next-etreeningud.vercel.app/api/fitness/get?id=${id}`)

  return { yoga: data }
}

export default Yoga
