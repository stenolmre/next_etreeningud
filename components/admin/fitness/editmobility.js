import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useFitState, useFitDispatch } from './../../../context/fitness'
import { updateWorkout, getWorkout } from './../../../actions/fitness'
import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { getSettings } from './../../../actions/settings'

import Layout from './../utils/layout'

export default function EditMobility() {
  const { query } = useRouter()

  const dispatchFit = useFitDispatch()
  const { workout } = useFitState()
  const dispatchSettings = useSettingsDispatch()
  const { fit_exercises, fit_categories, fit_equipment, fit_images, loading } = useSettingsState()

  useEffect(() => {
    getSettings(dispatchSettings)
    getWorkout(dispatchFit, query.id)
  }, [dispatchSettings, dispatchFit, query.id])

  const [mobilityData, setMobilityData] = useState({ image: '', name: '', category: 'mobility', equipment: 'Treeningmatt', length: 0, intro: '', video: '' })

  const onChange = e => setMobilityData({ ...mobilityData, [e.target.name]: e.target.value })

  const updateCurrentWorkout = async () => {
    setProcessing(true)
    await updateWorkout(dispatchFit, query.id, mobilityData, () => {
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

  useEffect(() => {
    setMobilityData(mobilityData => ({ ...mobilityData,
      image: !workout || !workout.image ? '' : workout.image,
      name: !workout || !workout.name ? '' : workout.name,
      category: !workout || !workout.category ? '' : workout.category,
      equipment: !workout || !workout.equipment ? '' : workout.equipment,
      length: !workout || !workout.length ? '' : workout.length,
      intro: !workout || !workout.intro ? '' : workout.intro,
      video: !workout || !workout.video ? '' : workout.video,
    }))
  }, [workout])

  return <Layout name="Muuda Liikuvustreeningut">
    <div className="admin_add_workout admin_page">
      <label>Pilt <span className="form_required">*</span></label>
      <div className="admin_add_workout_select_img">
        {
          fit_images && fit_images.map(el => <img key={el} src={el} alt={el} onClick={() => setMobilityData({ ...mobilityData, image: el })} style={mobilityData.image === el ? { border: '2px solid var(--dodgerblue)' } : null}/>)
        }
      </div>
      <label>Nimi <span className="form_required">*</span></label>
      <input name="name" value={mobilityData.name} onChange={onChange}/>
      <label>Kategooria <span className="form_required">*</span></label>
      <select name="category" id="category" onChange={e => setMobilityData({ ...mobilityData, category: e.target.value })}>
        <option value="" disabled={mobilityData.category !== ''}>..</option>
        {
          fit_categories && fit_categories.filter(el => el === 'mobility').map((el, i) => <option key={i} value={el}>{el}</option>)
        }
      </select>
      <label>Kestvus (min) <span className="form_required">*</span></label>
      <input type="number" name="length" value={mobilityData.length} onChange={onChange}/>
      <label>Lühikirjeldus (105 tähemärki) <span className="form_required">*</span></label>
      <textarea name="intro" value={mobilityData.intro} onChange={onChange} maxLength="105"/>
      <label>Youtube Video ID <span className="form_required">*</span></label>
      <input name="video" value={mobilityData.video} onChange={onChange}/>
      <button disabled={processing} style={{ marginLeft: '0' }} className="admin_add_workout_save_btn" onClick={updateCurrentWorkout}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
      <Link href="/private/admin/fitness"><a className="admin_edit_workout_go_back">Tagasi</a></Link>
      {success && <p className="form_success">Salvestatud.</p>}
      {error && <p className="form_error">Ups. Midagi läks valesti. Täida kõik väljad korrektselt ja proovi uuesti.</p>}
    </div>
  </Layout>
}
