import React, { useEffect, Fragment } from 'react'

import { useFitState, useFitDispatch } from './../../context/fitness'
import { getWorkouts } from './../../actions/fitness'

import Loader from './../utils/loader'
import Card from './../fitness/card'

const Fitness = () => {
  const dispatchFit = useFitDispatch()
  const { fitness, loading } = useFitState()

  useEffect(() => { getWorkouts(dispatchFit) }, [dispatchFit])

  return <div className="landing_fitness_container">
    {
      loading
        ? <div className="landing_section_loader"><Loader/></div>
        : <Fragment>
            <h2>Viimased treeningud</h2>
            <div className="landing_fitness">
              {
                fitness && fitness.map(el => <Card key={el._id} fit={el}/>).slice(0, 4)
              }
            </div>
          </Fragment>
    }
  </div>
}

export default Fitness
