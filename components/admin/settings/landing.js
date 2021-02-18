import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateLanding } from './../../../actions/settings'

import Loader from './../../utils/loader'

const Landing = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, landing, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [landingData, setLandingData] = useState({
    landing_title: '', landing_subtitle: '', landing_watermark: '', landing_button_text: '', landing_button_link: '', landing_image: '', landing_video_heading: '', landing_video_subheading: '', landing_contact_heading: '', landing_contact_subheading: ''
  })

  const onChange = e => setLandingData({ ...landingData, [e.target.name]: e.target.value })

  useEffect(() => {
    setLandingData(landingData => ({ ...landingData,
      landing_title: !landing || !landing.landing_title ? '' : landing.landing_title,
      landing_subtitle: !landing || !landing.landing_subtitle ? '' : landing.landing_subtitle,
      landing_watermark: !landing || !landing.landing_watermark ? '' : landing.landing_watermark,
      landing_button_text: !landing || !landing.landing_button_text ? '' : landing.landing_button_text,
      landing_button_link: !landing || !landing.landing_button_link ? '' : landing.landing_button_link,
      landing_image: !landing || !landing.landing_image ? '' : landing.landing_image,
      landing_video_heading: !landing || !landing.landing_video_heading ? '' : landing.landing_video_heading,
      landing_video_subheading: !landing || !landing.landing_video_subheading ? '' : landing.landing_video_subheading,
      landing_contact_heading: !landing || !landing.landing_contact_heading ? '' : landing.landing_contact_heading,
      landing_contact_subheading: !landing || !landing.landing_contact_subheading ? '' : landing.landing_contact_subheading
    }))
  }, [landing])

  const saveUpdatedLanding = async () => {
    setProcessing(true)
    await updateLanding(dispatchSettings, { landing: landingData }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page">
        <h3>Esilehe info</h3>
        <label>Esilehe Pealkiri</label>
        <input name="landing_title" value={landingData.landing_title} onChange={onChange}/>
        <label>Esilehe Alapealkiri</label>
        <input name="landing_subtitle" value={landingData.landing_subtitle} onChange={onChange}/>
        <label>Watermark</label>
        <input name="landing_watermark" value={landingData.landing_watermark} onChange={onChange}/>
        <label>Esilehe Nupu Nimi</label>
        <input name="landing_button_text" value={landingData.landing_button_text} onChange={onChange}/>
        <label>Esilehe Nupu URL</label>
        <input name="landing_button_link" value={landingData.landing_button_link} onChange={onChange}/>
        <label>Esilehe Pildi URL</label>
        <input name="landing_image" value={landingData.landing_image} onChange={onChange}/>
        <label>Video Sektsiooni Pealkiri</label>
        <input name="landing_video_heading" value={landingData.landing_video_heading} onChange={onChange}/>
        <label>Video Sektsiooni Alapealkiri</label>
        <input name="landing_video_subheading" value={landingData.landing_video_subheading} onChange={onChange}/>
        <label>Kontakti Sektsiooni Pealkiri</label>
        <input name="landing_contact_heading" value={landingData.landing_contact_heading} onChange={onChange}/>
        <label>Kontakti Sektsiooni Alapealkiri</label>
        <input name="landing_contact_subheading" value={landingData.landing_contact_subheading} onChange={onChange}/>
        <button onClick={saveUpdatedLanding} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
        {success && <p className="form_success">Salvestatud.</p>}
        {err && <p>{error && error.msg}</p>}
      </div>
    }
  </Fragment>
}

export default Landing
