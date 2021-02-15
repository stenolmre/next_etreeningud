import React, { Fragment } from 'react'
import Link from 'next/link'

import Features from './features'
import Fitness from './fitness'
import Posts from './posts'

const Landing = () => {
  return <Fragment>
    <div className="landing">
      <h1>Keskkond Iseseisvale Treenijale</h1>
      <p>Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.</p>
      <Link href="/fitness"><a>Treeningud</a></Link>
    </div>
    <Features />
    <Fitness />
    <Posts />
  </Fragment>
}

export default Landing
