import React, { Fragment } from 'react'
import Link from 'next/link'

import { useSettingsState, useSettingsDispatch } from './../../context/settings'
// import { getSettings } from './../../actions/settings'

import Loader from './../utils/loader'
import Features from './features'
import Fitness from './fitness'
import Video from './video'
import Posts from './posts'
import Form from './../contact/form'

import Navbar from './navbar'

const Landing = () => {
  const { landing, loading } = useSettingsState()

  return <Fragment>
    {
      loading ? <div className="index_loader"><Loader /></div> : landing && <Fragment>

        <div className="landing">
          <Navbar />
          <div className="landing_box"/>
          <div className="landing_watermark">
            <h1>{landing.landing_watermark}</h1>
          </div>
          <div className="landing_img neumorphism">
            <img src={landing.landing_image} alt="illustration"/>
          </div>
          <div className="landing_content">
            <h1 className="landing_heading">{landing.landing_title}</h1>
            <p className="landing_subheading">{landing.landing_subtitle}</p>
            <Link href={`/${landing.landing_button_link}`}><a className="landing_btn">{landing.landing_button_text}</a></Link>
          </div>
        </div>

        <Fitness />
        <Video heading={landing.landing_video_heading} subheading={landing.landing_video_subheading}/>
        <Posts />
        <div className="landing_contact" id="contact">
          <div>
            <h2>{landing.landing_contact_heading}</h2>
            <p>{landing.landing_contact_subheading}</p>
          </div>
          <Form />
        </div>
      </Fragment>
    }
  </Fragment>
}

export default Landing
