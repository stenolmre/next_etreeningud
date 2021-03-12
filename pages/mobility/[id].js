import React, { Fragment } from 'react'
import axios from 'axios'
import Head from './../../components/utils/head'

import MobilityContent from './../../components/fitness/mobility'

const Mobility = ({ mobility }) => {
  return <Fragment>
    <Head title={mobility.name} url={`https://etreeningud.ee/mobility/${mobility._id}?name=${mobility.name}`} image={mobility.image} description={mobility.intro}/>
    <MobilityContent mobility={mobility}/>
  </Fragment>
}

Mobility.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/fitness/get?id=${id}`)
    : await axios.get(`https://etreeningud.ee/api/fitness/get?id=${id}`)

  return { mobility: data }
}

export default Mobility
