import React, { Fragment } from 'react'
import axios from 'axios'
import Head from '@utils/head'

import WorkoutContent from '@c/fitness/workout'

const Workout = ({ workout }) => {
  return <Fragment>
    <Head title={workout.name} url={`https://etreeningud.ee/fitness/${workout._id}?name=${workout.name}`} image={workout.image} description={workout.intro}/>
    <WorkoutContent fit={workout}/>
  </Fragment>
}

export async function getServerSideProps(ctx) {
  const base = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
  const { data } = await axios.get(`${base}${ctx.req.headers.host}/api/fitness/get?id=${ctx.query.id}`)

  return {
    props: {
      workout: data
    }
  }
}

export default Workout
