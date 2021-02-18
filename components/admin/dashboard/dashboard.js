import React from 'react'

import Layout from './../utils/layout'
import Workouts from './workouts'
import Posts from './posts'

const Dashboard = () => {
  return <Layout name="Töölaud">
    <div className="admin_dashboard">
      <div></div>
      <Workouts />
      <div></div>
      <Posts />
    </div>
  </Layout>
}

export default Dashboard
