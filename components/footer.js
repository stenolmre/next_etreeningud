import React, { useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../context/settings'
import { getSettings } from './../actions/settings'

const Footer = () => {
  const dispatchSettings = useSettingsDispatch()
  const { social } = useSettingsState()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  return <footer>
    <div>
      <p>Copyright @ 2020 by KC Production. All rights reserved.</p>
    </div>
    <div>
      {
        social && social.map(el => <a target="_blank" rel="noreferrer" key={el._id} href={el.link}>
          <i className={el.icon}/>
        </a>)
      }
    </div>
  </footer>
}

export default Footer
