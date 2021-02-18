import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { useFitState, useFitDispatch } from './../../../context/fitness'
import { getWorkouts } from './../../../actions/fitness'

import Loader from './../../utils/loader'

export default function Workouts() {
  const dispatchFit = useFitDispatch()
  const { fitness, loading } = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  return <div className="admin_dashboard_list">
    <h3>Viimased Treeningud</h3>
    {
      loading
        ? <div className="admin_loader"><Loader /></div>
        : fitness && fitness.map(fit => <Link href={fit.category === 'jooga' ? `/fitness/yoga/${fit._id}` : `/fitness/${fit._id}`} key={fit._id}><a className="admin_row admin_dashboard_row">
            <img src={fit.image} alt={fit.name}/>
            <p>{fit.name}</p>
            <p>{fit.category}</p>
          </a></Link>).slice(0, 3)
    }
  </div>
}
