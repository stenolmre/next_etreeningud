import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Loader from './../../utils/loader'

export default function Analytics() {
  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics, loading: load_analytics } = useAnalyticState()

  useEffect(() => { getAnalytics(dispatchAnalytic) }, [dispatchAnalytic])

  return <div className="admin_dashboard_analytics">
    <div className="neumorphism">
      {
        load_analytics
          ? <Loader />
          : analytics && <h1>{analytics.filter(el => el.category === 'landing').filter(el => new Date(el.createdAt).getMonth() === new Date().getMonth() && new Date(el.createdAt).getFullYear() === new Date().getFullYear()).length}</h1>
      }
      <p>Külastajaid<br/>Kokku Sel Kuul</p>
      <i className="fas fa-thumbs-up neumorphism"/>
    </div>
    <div className="neumorphism">
      {
        load_analytics
          ? <Loader />
        : analytics && <h1>{analytics.filter(el => el.category === 'fitness').filter(el => new Date(el.createdAt).getMonth() === new Date().getMonth() && new Date(el.createdAt).getFullYear() === new Date().getFullYear()).length}</h1>
      }
      <p>Tehtud Treeninguid<br/>Kokku Sel Kuul</p>
      <i className="fas fa-heartbeat neumorphism"/>
    </div>
    <div className="neumorphism">
      {
        load_analytics
          ? <Loader />
        : analytics && <h1>{analytics.filter(el => el.category === 'blog').filter(el => new Date(el.createdAt).getMonth() === new Date().getMonth() && new Date(el.createdAt).getFullYear() === new Date().getFullYear()).length}</h1>
      }
      <p>Loetud Postituseid<br/>Kokku Sel Kuul</p>
      <i className="fas fa-pen neumorphism"/>
    </div>
  </div>
}
