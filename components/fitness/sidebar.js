import React from 'react'

import { useFitState, useFitDispatch } from '@context/fitness'
import { filterFit, sortFit } from '@actions/fitness'

import Sidebar from '@c/sidebar'

const SidebarFitness = () => {
  const dispatch = useFitDispatch()
  const { fitness, filters, sortBy } = useFitState()

  const icons = {
    jooga: 'fas fa-peace',
    jõud: 'fas fa-dumbbell',
    HIIT: 'fas fa-heartbeat',
  }

  const sorted = [
    {
      slug: 'az',
      name: 'AZ',
      icon: 'fas fa-sort-alpha-up'
    },
    {
      slug: 'za',
      name: 'ZA',
      icon: 'fas fa-sort-alpha-down'
    },
    {
      slug: 'uuemad enne',
      name: 'Uuemad enne',
      icon: 'fas fa-sort-numeric-up'
    },
    {
      slug: 'vanemad enne',
      name: 'Vanemad enne',
      icon: 'fas fa-sort-numeric-down'
    }
  ]

  return <Sidebar>
    <h3><i className="fas fa-sort-amount-down-alt"/>Sortreeri treeningud</h3>
    {
      sorted.map(element => <span key={element.slug} onClick={() => sortFit(dispatch, element.slug)} className={`${sortBy === element.slug ? 'active' : ''}`}>
        <i className={element.icon} />
        {element.name}
      </span>)
    }
    <h3><i className="fas fa-filter"/>Filtreeri treeningud</h3>
    <span className={`${!filters.length ? 'active' : ''}`} onClick={() => filterFit(dispatch, filters, [])}><i className="fas fa-border-all"/>Kõik</span>
    {
      fitness && [...new Set(fitness.map(fit => fit.category))].map(x => <span key={x} className={`${filters.includes(x) ? 'active' : ''}`} onClick={() => filterFit(dispatch, filters, x)}><i className={icons[x]}/>{x}</span>)
    }
  </Sidebar>
}

export default SidebarFitness
