import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useFitState, useFitDispatch } from './../../../context/fitness'
import { getWorkouts, removeWorkout } from './../../../actions/fitness'
import { useAnalyticState, useAnalyticDispatch } from './../../../context/analytic'
import { getAnalytics } from './../../../actions/analytic'

import Layout from './../utils/layout'
import Loader from './../../utils/loader'
import Header from './../utils/listheader'

const Fitness = () => {
  const router = useRouter()

  const dispatchAnalytic = useAnalyticDispatch()
  const { analytics } = useAnalyticState()
  const dispatchFit = useFitDispatch()
  const { fitness, loading } = useFitState()

  useEffect(() => {
    getWorkouts(dispatchFit)
    getAnalytics(dispatchAnalytic)
  }, [dispatchFit, dispatchAnalytic])

  const [search, setSearch] = useState('')

  const numOfLoadedWorkouts = router.query.num ? parseInt(router.query.num) : 10
  const numOfWorkouts = fitness && fitness.length

  return <Layout name="Treeningud" searchbox placeholder="Otsi treeningut" onChange={e => setSearch(e.target.value)}>
    <div className="admin_page">
      <Header />
      {
        loading ? <div className="admin_loader"><Loader /></div> : <Fragment>
          {
            fitness && fitness.filter(x => x.name.toLowerCase().includes(search.toLowerCase())).filter(x => x.category !== 'jooga').map(fit => <div key={fit._id} className="admin_row admin_list">
              <img src={fit.image} alt={fit.name}/>
              <Anchor id={fit._id} name={fit.name}/>
              <Anchor id={fit._id} name={fit.category}/>
              <Anchor id={fit._id} name={`${fit.length}min`}/>
              <Anchor id={fit._id} name={fit.equipment}/>
              <p>{analytics && analytics.filter(_el => _el.id === fit._id).length}</p>
              <div>
                <Link href={fit.category !== 'mobility' ? `/private/admin/editworkout?id=${fit._id}` : `/private/admin/editmobility?id=${fit._id}`}><a>
                  <i className="fas fa-pen"/>
                </a></Link>
                <i className="fas fa-times" onClick={async () => {
                  if (confirm('Kas sa oled kindel, et soovid treeningu kustutada?')) {
                    await removeWorkout(dispatchFit, fit._id)
                  }
                }}/>
              </div>
            </div>).slice(0, numOfLoadedWorkouts)
          }
          {
            numOfLoadedWorkouts < 10 || numOfLoadedWorkouts >= numOfWorkouts ? null : <p onClick={() => router.push(`/private/admin/fitness?num=${numOfLoadedWorkouts + 10}`, undefined, { shallow: true })} className="admin_list_load_more_btn">Näita rohkem..</p>
          }
        </Fragment>
      }
    </div>
  </Layout>
}

const Anchor = ({ id, name }) => {
  return <Link href={`/fitness/${id}?name=${name.toLowerCase().replaceAll(' ', '-')}`}><a>
    {name}
  </a></Link>
}

export default Fitness
