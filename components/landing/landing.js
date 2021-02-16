import React, { Fragment } from 'react'
import Link from 'next/link'

import Features from './features'
import Fitness from './fitness'
import Video from './video'
import Posts from './posts'
import Form from './../contact/form'

const Landing = () => {
  return <Fragment>
    <div className="landing">
      <h1>Keskkond Iseseisvale Treenijale</h1>
      <p>Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.</p>
      <Link href="/fitness"><a className="landing_button">Treeningud</a></Link>
    </div>
    <Features />
    <Fitness />
    <Video />
    <Posts />
    <div className="landing_contact" id="contact">
      <div>
        <h2>Kirjuta meile!</h2>
        <p>Meie kõige olulisem väärtus ja eesmärk on kliendisõbralikkus. Kui me saame Sind millegagi aidata, siis palun ära kõhkle meie poole pöördumast. Me anname endast parima, et Sinu ootused saaksid täidetud.</p>
      </div>
      <Form />
    </div>
  </Fragment>
}

export default Landing
