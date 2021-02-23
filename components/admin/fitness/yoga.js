import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { useFitState, useFitDispatch } from './../../../context/fitness'
import { getWorkouts, removeWorkout } from './../../../actions/fitness'
import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Layout from './../utils/layout'
import Loader from './../../utils/loader'
import Header from './../utils/listheader'

const Yoga = () => {
  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics } = useAnalyticState()
  const dispatchFit = useFitDispatch()
  const { fitness, loading } = useFitState()

  useEffect(() => {
    getWorkouts(dispatchFit)
    getAnalytics(dispatchAnalytic)
  }, [dispatchFit, dispatchAnalytic])

  const [search, setSearch] = useState('')

  return <Layout name="Joogatunnid" searchbox placeholder="Otsi joogatundi" onChange={e => setSearch(e.target.value)}>
    <div className="admin_page">
      <Header />
      {
        loading ? <div className="admin_loader"><Loader /></div> : fitness && fitness.filter(x => x.name.toLowerCase().includes(search.toLowerCase())).filter(x => x.category === 'jooga').map(fit => <div key={fit._id} className="admin_row admin_list">
          <img src={fit.image} alt={fit.name}/>
          <Anchor id={fit._id} name={fit.name}/>
          <Anchor id={fit._id} name={fit.category}/>
          <Anchor id={fit._id} name={`${fit.length}min`}/>
          <Anchor id={fit._id} name={fit.equipment}/>
          <p>{analytics && analytics.filter(_el => _el.id === fit._id).length}</p>
          <div>
            <Link href={`/private/admin/edityoga?id=${fit._id}`}><a>
              <i className="fas fa-pen"/>
            </a></Link>
            <i className="fas fa-times" onClick={async () => {
              if (confirm('Kas sa oled kindel, et soovid joogatunni kustutada?')) {
                await removeWorkout(dispatchFit, fit._id)
              }
            }}/>
          </div>
        </div>)
      }
    </div>
  </Layout>
}

const Anchor = ({ id, name }) => {
  return <Link href={`/yoga/${id}?name=${name.toLowerCase().replaceAll(' ', '-')}`}><a>
    {name}
  </a></Link>
}

export default Yoga
