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
              <div className="admin_analytics_cards">
                <Card name="Esilehe Külastuste Arv Kokku" num={analytics.filter(el => el.category === 'landing' ).length} icon="fas fa-eye"/>
                <Card name="Tehtud Treeninguid Kokku" num={analytics.filter(el => el.category === 'fitness' ).length} icon="fas fa-dumbbell"/>
                <Card name="Loetud Postitusi Kokku" num={analytics.filter(el => el.category === 'blog' ).length} icon="fas fa-pen"/>
              </div>
              <div className="admin_analytics_navbar">
                <Anchor name="Fitness" link="fitness" num="10"/>
                <Anchor name="Postitused" link="posts" num="10"/>
              </div>
              {
                query.page === 'fitness' ? <Fitness analytics={analytics}/> : <Posts analytics={analytics}/>
              }
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
