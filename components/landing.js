import React from 'react'
import Link from 'next/link'

import Fitness from '@c/fitness/fitnessv2'
import Posts from '@c/posts/postsv2'
import { MainCard, SmCard } from '@c/postcard'

const Landing = () => {
  return <main className="landing">
    <nav>
      <h1>et.</h1>
      <div className="main">
        <Link href="/"><a className="nav">
          <i className="fas fa-rocket"/>
          <span>Esileht</span>
        </a></Link>
        <Link href="/fitness"><a className="nav">
          <i className="fas fa-dumbbell"/>
          <span>Fitness</span>
        </a></Link>
        <Link href="/posts"><a className="nav">
          <i className="fas fa-blog"/>
          <span>Blogi</span>
        </a></Link>
        <a href="https://m.me/coachkeisy" className="nav" target="_blank" rel="noreferrer">
          <i className="fas fa-mobile-alt"/>
          <span>Kontakt</span>
        </a>
      </div>
      <span>copyrighted<br/>@ {new Date().getFullYear()}<br/>Keisy Pōldsam</span>
    </nav>
    <section className="main">
      <div className="header">
        <div className="owner_image"/>
        <span>Keisy Põldsam</span>
        <h1>Tere tulemast eTreeningutesse!</h1>
        <h3>Mina olen Keisy ja ma soovin sulle häid trennielamusi!</h3>
      </div>
      <Fitness />
    </section>
    <section className="_sidebar">
      <div className="_sidebar_cards">
        <MainCard />
        <SmCard image="https://images.unsplash.com/photo-1571114431613-68b587d553e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxjaXR5JTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <SmCard image="https://images.unsplash.com/photo-1514679347725-10436adc23a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxjaXR5JTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <SmCard image="https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
      </div>
    </section>
  </main>
}

export default Landing
