import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { usePostState, usePostDispatch } from '@context/post'
import { sortPosts, filterPosts } from '@actions/post'
import { useFitState, useFitDispatch } from '@context/fitness'
import { sortFit, filterFit } from '@actions/fitness'

const Navbar = () => {
  const { asPath } = useRouter()

  return <nav>
    <h1>et.</h1>
    <div className="main">
      <A href="/" icon="fas fa-rocket">Esileht</A>
      <A href="/fitness" icon="fas fa-heartbeat">Fitness</A>
      <A href="/posts" icon="fas fa-blog">Blogi</A>
      <A target="_blank" rel="noreferrer" href="https://m.me/coachkeisy" icon="fas fa-mobile-alt">Kontakt</A>
    </div>
    <div className="filters">
      <span>Sorteeri</span>
      <Sorter icon="fas fa-sort-numeric-down" value="uuemad enne"/>
      <Sorter icon="fas fa-sort-numeric-up" value="vanemad enne"/>
      <Sorter icon="fas fa-sort-alpha-down" value="az"/>
      <Sorter icon="fas fa-sort-alpha-up" value="za"/>
      <span>Filtreeri</span>
      {
        asPath === '/posts' ? <PostFilters /> : <FitFilters />
      }
    </div>
  </nav>
}

const A = ({ children, href, icon, ...props }) => {
  const { asPath } = useRouter()
  const className = asPath === href ? 'active nav' : 'nav'
  return <Link href={href || as}><a className={className} {...props}>
    <i className={icon} />
    <span>{children}</span>
  </a></Link>
}

const Sorter = ({ icon, value }) => {
  const dispatchFit = useFitDispatch()
  const dispatchPost = usePostDispatch()
  const fit = useFitState()
  const posts = usePostState()

  const { asPath } = useRouter()
  const dispatch = asPath === '/posts' ? dispatchPost : dispatchFit
  const sortBy = asPath === '/posts' ? posts.sortBy : fit.sortBy
  const action = asPath === '/posts' ? sortPosts : sortFit

  return <i className={`filter ${icon} ${sortBy === value ? 'active' : ''}`} onClick={() => action(dispatch, value)}/>
}

const FitFilters = () => {
  const dispatch = useFitDispatch()
  const { fitness, filters } = useFitState()
  const _filters = [...new Set(fitness.map(fit => fit.category.toLowerCase()))].sort()

  return _filters.map(filter => <i key={filter} className={`filter ${icons[filter]} ${filters.includes(filter) ? 'active' : ''}`} onClick={() => filterFit(dispatch, filters, filter)} />)
}

const PostFilters = () => {
  const dispatch = usePostDispatch()
  const { posts, filters } = usePostState()
  const _filters = [...new Set(posts.map(post => post.category.toLowerCase()))].sort()

  return _filters.map(filter => <i key={filter} className={`filter ${icons[filter]} ${filters.includes(filter) ? 'active' : ''}`} onClick={() => filterPosts(dispatch, filters, filter)} />)
}

const icons = {
  hiit: 'fas fa-heartbeat',
  jõud: 'fas fa-dumbbell',
  jooga: 'fas fa-peace',
  inimesed: 'fas fa-user-friends',
  tervis: 'far fa-heart',
  toitumine: 'fas fa-apple-alt',
  treening: 'fas fa-dumbbell'
}

export default Navbar
