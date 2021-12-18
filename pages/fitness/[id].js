import React from 'react'
import axios from 'axios'
import Head from '@utils/head'

import Layout from '@c/layout/layout'
import Intro from '@c/fitness/intro'
import Exercises from '@c/fitness/exercises'

const Index = ({ workout }) => {
  return <Layout post>
    <Head title={workout.name} url={`https://etreeningud.ee/fitness/${workout._id}?name=${workout.name}`} image={workout.image} description={workout.intro}/>
    <div>
      <Intro workout={workout}/>
      <Exercises workout={workout}/>
      <div className="workout_completed_container">
        <h1>Sa oled awesome!<br/>Treening on edukalt tehtud!</h1>
      </div>
    </div>
  </Layout>
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

export default Index
