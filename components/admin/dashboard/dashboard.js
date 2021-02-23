import React from 'react'

import Layout from './../utils/layout'
import Workouts from './workouts'
import Analytics from './analytics'
import Posts from './posts'

const Dashboard = () => {
  return <Layout name="Töölaud">
    <div className="admin_dashboard">
      <div></div>
      <Workouts />
      <Analytics />
      <Posts />
    </div>
  </Layout>
}

export default Dashboard
