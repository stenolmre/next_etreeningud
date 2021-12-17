import React, { Fragment } from 'react'

import useFitness from '@hooks/useFitness'
import usePosts from '@hooks/usePosts'
import useWriters from '@hooks/useWriters'

import Footbar from '@c/layout/footbar'
import Header from '@c/layout/header'
import Navbar from '@c/layout/navbar'
import { LgCard, SmCard } from '@c/card'

const Layout = ({ children, pills, post = false }) => {
  useFitness()
  usePosts()
  useWriters()

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
              arr.map((el, index) => {
                if (index === 0) return <LgCard key={index} image={el}/>
                return <SmCard key={index} image={el}/>
              }).slice(0, 4)
            }
          </div>
        </section>
      </Fragment> : <Fragment>{children}</Fragment>
    }
    <Footbar />
  </main>
}

export default Layout

const arr = [
  'https://images.unsplash.com/photo-1482877346909-048fb6477632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNpdHklMjBjb2xvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1571114431613-68b587d553e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxjaXR5JTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1514679347725-10436adc23a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxjaXR5JTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
]
