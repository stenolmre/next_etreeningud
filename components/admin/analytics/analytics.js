import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Layout from './../utils/layout'
import Loader from './../../utils/loader'
import Calendar from './../utils/calendar'
import Card from './card'
import Yearly from './yearly'
import Monthly from './monthly'

const Analytics = () => {
  const { query } = useRouter()

  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics, loading } = useAnalyticState()

  useEffect(() => { getAnalytics(dispatchAnalytic) }, [dispatchAnalytic])

  const [selectedDate, setSelectedDate] = useState(new Date())

  return <Layout name="Statistika">
    <div className="admin_page">
      {
        loading
          ? <div className="admin_loader"><Loader /></div>
          : analytics && <Fragment>
              <div className="admin_analytics">
                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                <Card num={analytics.filter(el => el.category === 'landing').filter(el => new Date(el.createdAt).toLocaleDateString() === selectedDate.toLocaleDateString()).length} name="eTreeningute külastatavus" icon="fas fa-thumbs-up"/>
                <Card num={analytics.filter(el => el.category === 'fitness').filter(el => new Date(el.createdAt).toLocaleDateString() === selectedDate.toLocaleDateString()).length} name="Tehtud treeningud" icon="fas fa-dumbbell"/>
                <Card num={analytics.filter(el => el.category === 'blog').filter(el => new Date(el.createdAt).toLocaleDateString() === selectedDate.toLocaleDateString()).length} name="Loetud postitused" icon="fas fa-pen"/>
              </div>
              <Yearly analytics={analytics}/>
              <Monthly analytics={analytics}/>
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
