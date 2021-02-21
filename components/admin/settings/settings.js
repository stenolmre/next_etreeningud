import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useSettingsDispatch } from './../../../context/settings'
import { getSettings } from './../../../actions/settings'

import Layout from './../utils/layout'
import Navbar from './navbar'
import Landing from './landing'
import Features from './features'
import Social from './social'
import Writers from './writers/writers'
import BlogCategories from './blogcategories'
import Exercises from './exercises'
import Workouts from './workouts'
import WorkoutImages from './workoutimages'

const SettingsContent = () => {
  const { query } = useRouter()

  switch (query.page) {
    case 'landing':
      return <Landing />
    case 'features':
      return <Features />
    case 'sotsiaalmeedia':
      return <Social />
    case 'writers':
      return <Writers />
    case 'blogikategooriad':
      return <BlogCategories />
    case 'harjutused':
      return <Exercises />
    case 'treeningud':
      return <Workouts />
    case 'treeningutepildid':
      return <WorkoutImages />
    default:
      return null
  }
}

const Settings = () => {
  const dispatchSettings = useSettingsDispatch()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  return <Layout name="Seaded">
    <Navbar />
    <SettingsContent />
  </Layout>
}

export default Settings
