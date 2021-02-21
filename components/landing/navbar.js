import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { useSettingsState, useSettingsDispatch } from './../../context/settings'
import { getSettings } from './../../actions/settings'

import Loader from './../utils/loader'

const Navbar = () => {
  const dispatchSettings = useSettingsDispatch()
  const { social, loading } = useSettingsState()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  return <Fragment>
    {
      loading
        ? <div className="index_loader"><Loader /></div>
        : <div className="landing_navbar">
            <div>
              <img src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,h_113/v1613366877/utils/logo.png" alt="logo"/>
            </div>
            <div className="landing_navbar_navs">
              <Link href="/">
                <a>Esileht</a>
              </Link>
              <Link href="/fitness">
                <a>Treeningud</a>
              </Link>
              <Link href="/posts">
                <a>Blogi</a>
              </Link>
              <Link href="/#contact">
                <a>Kontakt</a>
              </Link>
            </div>
            <div className="landing_social">
              {
                social && social.map(el => <a target="_blank" rel="noreferrer" key={el._id} href={el.link}>
                  <i className={el.icon}/>
                </a>)
              }
            </div>
          </div>
    }
  </Fragment>
}

export default Navbar
