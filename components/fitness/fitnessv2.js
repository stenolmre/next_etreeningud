import React, { Fragment } from 'react'

import { useFitState } from '@context/fitness'
import daysToGo from '@ui/utils/daysToGo'

import Card from '@c/card'
import { LoadingCards } from '@c/loading'

const Fitness = () => {
  const { loading, fitness, filters, sortBy } = useFitState()

  const sortFit = () => {
    if (!fitness.length || fitness == null) return

    return fitness.sort((a, b) => {
      if (sortBy === 'newest') {
        if (daysToGo(a.createdAt) > daysToGo(b.createdAt)) return -1
      }

      if (sortBy === 'oldest') {
        if (daysToGo(a.createdAt) < daysToGo(b.createdAt)) return -1
      }

      if (sortBy === 'az') {
        if (a.name < b.name) return -1
      }

      if (sortBy === 'za') {
        if (a.name > b.name) return -1
      }

      return 0
    })
  }

  const showFitness = () => {
    if (!fitness.length || fitness == null) return
    if (!filters.length) return sortFit(fitness)

    return sortFit(fitness).filter(_fit => filters.includes(_fit.category))
  }

  return <Fragment>
    <div className="cards_container">
      {
        loading
          ? <LoadingCards />
          : showFitness().map((fit, index) => <Card key={index} data={fit} blog={false}/>).slice(0, 12)
      }
    </div>
  </Fragment>
}

export default Fitness
