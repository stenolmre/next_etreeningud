import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useFitState, useFitDispatch } from './../../context/fitness'
import { getWorkouts } from './../../actions/fitness'

import Loader from './../utils/loader'
import Searchbar from './../utils/searchbar'
import { Row, Header } from './row'
import Card from './card'

const Fitness = () => {
  const { query } = useRouter()

  const [search, setSearch] = useState('')

  const dispatchFitness = useFitDispatch()
  const { loading, fitness } = useFitState()

  useEffect(() => { getWorkouts(dispatchFitness) }, [dispatchFitness])

  return <Fragment>
    <Searchbar fitness onChange={e => setSearch(e.target.value)} placeholder="Otsi treeningut" href={`/fitness?search=${search}`}/>
    <div className="fitness">
      {
        loading
          ? <div className="fitness_loader"><Loader /></div>
          : query.category
            ? fitness && fitness.filter(el => el.category.toLowerCase() === query.category).length < 1
              ? <p className="no_workouts_msg">Treeningud puuduvad hetkel.</p>
              : fitness && fitness.filter(el => el.category.toLowerCase() === query.category).map(fit => <Fragment key={fit._id}>
                  <Card fit={fit}/>
                </Fragment>)
            : fitness && fitness.filter(el => el.name.toLowerCase().includes(query.search ? query.search.toLowerCase() : '')).map(fit => <Fragment key={fit._id}>
                <Card fit={fit}/>
              </Fragment>)
      }
    </div>
  </Fragment>
}

export default Fitness
