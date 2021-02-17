import React, { Fragment } from 'react'
import Link from 'next/link'

import Features from './features'
import Fitness from './fitness'
import Video from './video'
import Posts from './posts'
import Form from './../contact/form'

import Navbar from './navbar'

const Landing = () => {
  return <Fragment>
    <div className="demo">
      <div className="box"/>
      <div className="box_img">
        <img src="https://etreeningud.ee/media/images/training/e14.jpg" alt=""/>
      </div>
      <h1 className="box_watermark">SMILE</h1>
      <Navbar />
      <h1 className="box_heading">Great smile skyrockets your confidence!</h1>
      <p className="box_subheading">Vii oma eesmärgid ellu eTreeningutega. Tasuta treeningkavad koos õpetustega, huvitavad teadmised blogis ja võimalus küsida abi Coach Keisylt.</p>
      <Link href="/fitnesss"><a className="box_btn">Treeningud</a></Link>
    </div>

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
