import React, { Fragment, useEffect } from 'react'
import axios from 'axios'

import Workout from '@c/apps/fitness/workout'

const Index = ({ workout }) => {
  return <Fragment>
    <Workout workout={workout}/>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/fitness?id=${id}`)
    : await axios.get(`https://etreeningud.ee/api/fitness?id=${id}`)

  return { workout: data }
}

export default Index
