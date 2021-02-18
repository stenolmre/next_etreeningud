import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateSocial } from './../../../actions/settings'

import Loader from './../../utils/loader'

const SocialSettings = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, social, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [socialData, setSocialData] = useState({ social_links: [] })

  useEffect(() => {
    setSocialData(socialData => ({ ...socialData,
      social_links: !social ? [] : social,
    }))
  }, [social])

  const addNewSocialLink = () => {
    socialData.social_links.push({ icon: '', link: '' })
    setSocialData({ ...socialData })
  }

  const saveUpdatedSocialLinks = async () => {
    setProcessing(true)
    await updateSocial(dispatchSettings, { social: socialData.social_links }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page">
        <h3>Sotsiaalmeedia Lingid</h3>
        {
          social && socialData.social_links.map((el, i) => <div key={i} className="admin_settings_exercises_row">
            <select name="icon" id="icon" onChange={e => {
              socialData.social_links[i].icon = e.target.value
              setSocialData({ ...socialData })
            }} value={socialData.social_links[i].icon}>
              <option value="" disabled={socialData.social_links[i].icon !== ''}>..</option>
              {
                social_icons_list.map((el, i) => <option key={i} value={el.icon}>{el.name}</option>)
              }
            </select>
            <input className="middle_input" name="link" value={socialData.social_links[i].link}
              onChange={e => {
                socialData.social_links[i].link = e.target.value
                setSocialData({ ...socialData })
            }}/>
            <i className="fas fa-times" onClick={() => {
              const newArray = socialData.social_links.filter((x, index) => index !== i)
              setSocialData({ ...socialData, social_links: newArray })
            }}/>
        </div>)
        }
        <div style={{ marginTop: '25px' }}>
          <button className="admin_feature_add_new_btn" onClick={addNewSocialLink}>Lisa</button>
          <button onClick={saveUpdatedSocialLinks} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Salvestatud</p>}
          {err && <p>{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}

export default SocialSettings

const social_icons_list = [
  { name: 'Instagram', icon: 'fab fa-instagram' },
  { name: 'Facebook', icon: 'fab fa-facebook' },
  { name: 'Twitter', icon: 'fab fa-twitter' },
  { name: 'Youtube', icon: 'fab fa-youtube' },
  { name: 'Spotify', icon: 'fab fa-spotify' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { name: 'Mail', icon: 'fas fa-envelope' },
  { name: 'Phone', icon: 'fas fa-mobile-alt' },
  { name: 'Pinterest', icon: 'fab fa-pinterest' },
  { name: 'Google', icon: 'fab fa-google' },
]
