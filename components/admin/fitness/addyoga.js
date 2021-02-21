import React, { useState, useEffect } from 'react'

import { useFitDispatch } from './../../../context/fitness'
import { addWorkout } from './../../../actions/fitness'
import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { getSettings } from './../../../actions/settings'

import Layout from './../utils/layout'

export default function AddYoga() {
  const dispatchFit = useFitDispatch()
  const dispatchSettings = useSettingsDispatch()
  const { fit_exercises, fit_categories, fit_equipment, loading } = useSettingsState()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  const [yogaData, setYogaData] = useState({ image: '', name: '', category: '', equipment: 'joogamatt', length: 0, intro: '', video: '' })

  const onChange = e => setYogaData({ ...yogaData, [e.target.name]: e.target.value })

  const addNewWorkout = async () => {
    setProcessing(true)
    await addWorkout(dispatchFit, yogaData, () => {
      setSuccess(true)
      setProcessing(false)
    }, () => {
      setError(true)
      setProcessing(false)
    })
  }

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  return <Layout name="Muuda Joogatundi">
    <div className="admin_add_workout admin_page">
      <label>Pilt <span className="form_required">*</span></label>
      <input name="image" value={yogaData.image} onChange={onChange}/>
      <label>Nimi <span className="form_required">*</span></label>
      <input name="name" value={yogaData.name} onChange={onChange}/>
      <label>Kategooria <span className="form_required">*</span></label>
      <select name="category" id="category" onChange={e => setYogaData({ ...yogaData, category: e.target.value })}>
        <option value="" disabled={yogaData.category !== ''}>..</option>
        {
          fit_categories && fit_categories.filter(el => el === 'jooga').map((el, i) => <option key={i} value={el}>{el}</option>)
        }
      </select>
      <label>Kestvus (min) <span className="form_required">*</span></label>
      <input type="number" name="length" value={yogaData.length} onChange={onChange}/>
      <label>Lühikirjeldus <span className="form_required">*</span></label>
      <textarea name="intro" value={yogaData.intro} onChange={onChange}/>
      <label>Youtube Video ID <span className="form_required">*</span></label>
      <input name="video" value={yogaData.video} onChange={onChange}/>
      <button disabled={processing} style={{ marginLeft: '0' }} className="admin_add_workout_save_btn" onClick={addNewWorkout}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
      {success && <p className="form_success">Salvestatud.</p>}
      {error && <p className="form_error">Ups. Midagi läks valesti. Täida kõik väljad korrektselt ja proovi uuesti.</p>}
    </div>
  </Layout>
}
