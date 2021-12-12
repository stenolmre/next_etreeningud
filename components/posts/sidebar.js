import React from 'react'

import { usePostState, usePostDispatch } from '@context/post'
import { filterPosts, sortPosts } from '@actions/post'

import Sidebar from '@c/sidebar'

const SidebarPosts = () => {
  const dispatch = usePostDispatch()
  const { posts, filters, sortBy } = usePostState()

  const icons = {
    tervis: 'fas fa-peace',
    treening: 'fas fa-dumbbell',
    toitumine: 'fas fa-apple-alt',
    inimesed: 'fas fa-walking',
    vabaaeg: 'fas fa-arrow-up'
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
    <h3><i className="fas fa-sort-amount-down-alt"/>Sortreeri postitused</h3>
    {
      sorted.map(element => <span key={element.slug} onClick={() => sortPosts(dispatch, element.slug)} className={`${sortBy === element.slug ? 'active' : ''}`}>
        <i className={element.icon} />
        {element.name}
      </span>)
    }
    <h3><i className="fas fa-filter"/>Filtreeri postitused</h3>
    <span className={`${!filters.length ? 'active' : ''}`} onClick={() => filterPosts(dispatch, filters, [])}><i className="fas fa-border-all"/>Kõik</span>
    {
      posts && [...new Set(posts.map(post => post.category.toLowerCase()))].map(x => <span key={x} className={`${filters.includes(x) ? 'active' : ''}`} onClick={() => filterPosts(dispatch, filters, x)}><i className={icons[x.replace(/ /g, '')]}/>{x}</span>)
    }
  </Sidebar>
}

export default SidebarPosts
