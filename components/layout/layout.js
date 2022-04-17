import React, { Fragment } from 'react'

import useFitness from '@hooks/useFitness'
import usePosts from '@hooks/usePosts'
import useConfig from '@hooks/useConfig'

import Footbar from '@c/layout/footbar'
import Navbar from '@c/layout/navbar'
import Ad from '@c/cards/ad'
import { LoadingAd } from '@c/loading'

const Layout = ({ children, pills, post = false, sidebar = [], loading = true, num = 5 }) => {
  useConfig()
  useFitness()
  usePosts()

  return <main className={`landing ${post ? 'landing_no_sidebar' : ''}`}>
    <Navbar post={post}/>
    {
      !post ? <Fragment>
        <section className="main">
          { children }
        </section>
        <section className="_sidebar">
          <div className="_sidebar_cards">
            <h2 className="mb-8">{pills.includes('treeningud') ? 'Blogi positused' : 'Uusimad Treeningud'}</h2>
            {
              loading ? <LoadingAd num={4} /> : sidebar.map((el, index) => <Ad key={index} data={el}/>).slice(0, num)
            }
          </div>
        </section>
      </Fragment> : <Fragment>{children}</Fragment>
    }
    <Footbar />
  </main>
}

export default Layout
