import React, { Fragment } from 'react'

import useFitness from '@hooks/useFitness'
import usePosts from '@hooks/usePosts'
import useConfig from '@hooks/useConfig'

import Footbar from '@c/layout/footbar'
import Header from '@c/layout/header'
import Navbar from '@c/layout/navbar'
import { LgCard, SmCard } from '@c/card'
import { LoadingAd } from '@c/loading'

const Layout = ({ children, pills, post = false, sidebar = [], loading = true, num = 5, blog }) => {
  useConfig()
  useFitness()
  usePosts()

  return <main className={`landing ${post ? 'landing_no_sidebar' : ''}`}>
    <Navbar post={post}/>
    {
      !post ? <Fragment>
        <section className="main">
          <Header pills={pills}/>
          { children }
        </section>
        <section className="_sidebar">
          <div className="_sidebar_cards">
            {
              loading ? <LoadingAd num={4} /> : sidebar.map((el, index) => {
                if (index === 0) return <LgCard key={index} data={el} blog={blog}/>
                return <SmCard key={index} data={el}  blog={blog}/>
              }).slice(0, num)
            }
          </div>
        </section>
      </Fragment> : <Fragment>{children}</Fragment>
    }
    <Footbar />
  </main>
}

export default Layout
