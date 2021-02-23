import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useFitState, useFitDispatch } from './../../../context/fitness'
import { getWorkouts } from './../../../actions/fitness'

import Loader from './../../utils/loader'
import Header from './header'

const Fitness = ({ analytics }) => {
  const router = useRouter()

  const dispatchFit = useFitDispatch()
  const { fitness, loading } = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  const findWorkout = (id) => fitness && fitness.filter(_el => _el._id === id)[0]

  const numOfLoadedWorkouts = router.query.num ? parseInt(router.query.num) : 10
  const numOfWorkouts = analytics && analytics.filter(el => el.category === 'fitness').length

  return <Fragment>
    <Header />
    {
      loading ? <div className="admin_loader"><Loader /></div> : <Fragment>
        {
          analytics && fitness && analytics.filter(el => el.category === 'fitness').map(el => <Link key={el._id} href={`/fitness/${el.id}?name=${findWorkout(el.id) && findWorkout(el.id).name.toLowerCase().replaceAll(' ', '-')}`}><a className="admin_row admin_list admin_row_analytics">
            <img src={findWorkout(el.id) && findWorkout(el.id).image} alt={el.id}/>
            <p>{findWorkout(el.id) ? findWorkout(el.id).name : 'Treening on kustutatud.'}</p>
            <p>{new Date(el.createdAt).toLocaleDateString()}</p>
            <p>{`${new Date(el.createdAt).getHours()}.${new Date(el.createdAt).getMinutes()}`}</p>
          </a></Link>)
        }
        {
          numOfLoadedWorkouts < 10 || numOfLoadedWorkouts >= numOfWorkouts ? null : <p onClick={() => router.push(`/private/admin/analytics?page=fitness&num=${numOfLoadedWorkouts + 10}`, undefined, { shallow: true })} className="admin_list_load_more_btn">Näita rohkem..</p>
        }
      </Fragment>
    }
  </Fragment>
}

export default Fitness
