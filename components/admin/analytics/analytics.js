import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Layout from './../utils/layout'
import Loader from './../../utils/loader'
import Card from './card'
import Fitness from './fitness'
import Posts from './posts'

const Analytics = () => {
  const { query } = useRouter()

  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics, loading } = useAnalyticState()

  useEffect(() => { getAnalytics(dispatchAnalytic) }, [dispatchAnalytic])

  return <Layout name="Statistika">
    <div className="admin_page">
      {
        loading
          ? <div className="admin_loader"><Loader /></div>
          : analytics && <Fragment>
              <h3>Külastatavus</h3>
              <div className="admin_analytics_cards">
                <Card name="Kokku" num={analytics.filter(el => el.category === 'landing' ).length} icon="fas fa-thumbs-up"/>
                <Card name="Sel Aastal" num={analytics.filter(el => el.category === 'landing' ).filter(x => new Date(x.createdAt).getFullYear() === new Date().getFullYear()).length} icon="fas fa-thumbs-up"/>
                <Card name="Sel Kuul" num={analytics.filter(el => el.category === 'landing' ).filter(x => new Date(x.createdAt).getMonth() === new Date().getMonth()).length} icon="fas fa-thumbs-up"/>
              </div>
              <h3>Tehtud Treeningud</h3>
              <div className="admin_analytics_cards">
                <Card name="Kokku" num={analytics.filter(el => el.category === 'fitness' ).length} icon="fas fa-dumbbell"/>
                <Card name="Sel Aastal" num={analytics.filter(el => el.category === 'fitness' ).filter(x => new Date(x.createdAt).getFullYear() === new Date().getFullYear()).length} icon="fas fa-dumbbell"/>
                <Card name="Sel Kuul" num={analytics.filter(el => el.category === 'fitness' ).filter(x => new Date(x.createdAt).getMonth() === new Date().getMonth()).length} icon="fas fa-dumbbell"/>
              </div>
              <h3>Loetud Postitused</h3>
              <div className="admin_analytics_cards">
                <Card name="Kokku" num={analytics.filter(el => el.category === 'blog' ).length} icon="fas fa-pen"/>
                <Card name="Sel Aastal" num={analytics.filter(el => el.category === 'blog' ).filter(x => new Date(x.createdAt).getMonth() === new Date().getMonth()).length} icon="fas fa-pen"/>
                <Card name="Sel Kuul" num={analytics.filter(el => el.category === 'blog' ).filter(x => new Date(x.createdAt).getMonth() === new Date().getMonth()).length} icon="fas fa-pen"/>
              </div>
            </Fragment>
      }
    </div>
  </Layout>
}

const Anchor = ({ name, link, num }) => {
  const { query } = useRouter()

  return <Link href={`/private/admin/analytics?page=${link}&num=${num}`}><a className={query.page === link ? 'inset_neumorphism' : 'neumorphism'}>
    { name }
  </a></Link>
}

export default Analytics
