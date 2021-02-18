import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateExercises } from './../../../actions/settings'

import Loader from './../../utils/loader'

const Landing = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, fit_exercises, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [exercisesData, setExercisesData] = useState({ all_exercises: [] })

  useEffect(() => {
    setExercisesData(exercisesData => ({ ...exercisesData,
      all_exercises: !fit_exercises ? [] : fit_exercises,
    }))
  }, [fit_exercises])

  const addNewFeature = () => {
    exercisesData.all_exercises.push({ fit_exercises_name: '', fit_exercises_gif: '' })
    setExercisesData({ ...exercisesData })
  }

  const saveUpdatedFeatures = async () => {
    setProcessing(true)
    await updateExercises(dispatchSettings, { fit_exercises: exercisesData.all_exercises }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page">
        <h3>Harjutused</h3>
        {
          fit_exercises && exercisesData.all_exercises.map((el, i) => <div key={i} className="admin_settings_exercises_row">
            <input name="fit_exercises_name" value={exercisesData.all_exercises[i].fit_exercises_name}
              onChange={e => {
                exercisesData.all_exercises[i].fit_exercises_name = e.target.value
                setExercisesData({ ...exercisesData })
            }}/>
            <input className="middle_input" name="fit_exercises_gif" value={exercisesData.all_exercises[i].fit_exercises_gif}
              onChange={e => {
                exercisesData.all_exercises[i].fit_exercises_gif = e.target.value
                setExercisesData({ ...exercisesData })
            }}/>
            <i className="fas fa-times" onClick={() => {
              const newArray = exercisesData.all_exercises.filter((x, index) => index !== i)
              setExercisesData({ ...exercisesData, all_exercises: newArray })
            }}/>
        </div>)
        }
        <div style={{ marginTop: '25px' }}>
          <button className="admin_feature_add_new_btn" onClick={addNewFeature}>Lisa</button>
          <button onClick={saveUpdatedFeatures} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Salvestatud.</p>}
          {err && <p>{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}

export default Landing
