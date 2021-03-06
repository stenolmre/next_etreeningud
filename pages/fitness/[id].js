import React, { Fragment } from 'react'
import axios from 'axios'
import Head from './../../components/utils/head'

import WorkoutContent from './../../components/fitness/workout'

const Workout = ({ workout }) => {
  return <Fragment>
    <Head title={workout.name} url={`https://etreeningud.ee/fitness/${workout._id}?name=${workout.name}`} image={workout.image} description={workout.intro}/>
    <WorkoutContent fit={workout}/>
  </Fragment>
}

Workout.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/fitness/get?id=${id}`)
    : await axios.get(`https://etreeningud.ee/api/fitness/get?id=${id}`)

  return { workout: data }
}

export default Workout
