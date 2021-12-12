import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@c/utils/head'

import WorkoutContent from '@c/fitness/workout'

const Workout = ({ workout }) => {
  return <Fragment>
    <Head title={workout.name} url={`https://etreeningud.ee/fitness/${workout._id}?name=${workout.name}`} image={workout.image} description={workout.intro}/>
    <WorkoutContent fit={workout}/>
  </Fragment>
}

Workout.getInitialProps = async ctx => {
  const id = await ctx.query.id
  const host = await ctx.req.headers.host
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'

  const { data } = await axios.get(base + host + '/api/fitness/get?id=' + id)
  return { workout: data }
}

export default Workout
