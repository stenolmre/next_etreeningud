import React, { Fragment, useState, useEffect } from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { filterFit } from '@actions/fitness'

import Loader from '@c/utils/loader'
import Card from '@c/fitness/card'
import Sidebar from '@c/sidebar'

const Fitness = () => {
  const dispatch = useFitDispatch()
  const { loading, fitness, filters } = useFitState()

  const arr = ['jõud', 'jooga', 'HIIT']

  const showFitness = () => {
    if (!fitness.length || fitness == null) return
    if (!filters.length) return fitness

    return fitness.filter(_fit => filters.includes(_fit.category))
  }

  return <Fragment>
    <Sidebar>
      {
        fitness && [...new Set(fitness.map(fit => fit.category))].map(x => <span key={x} className={`${filters.includes(x) ? 'active' : ''}`} onClick={() => filterFit(dispatch, filters, x)}>{x}</span>)
      }
    </Sidebar>
    <div className="fitness">
      {
        loading
          ? <div className="fitness_loader"><Loader /></div>
          : showFitness().map((fit, index) => <Card key={index} fit={fit}/>)
      }
    </div>
  </Fragment>
}

export default Fitness
