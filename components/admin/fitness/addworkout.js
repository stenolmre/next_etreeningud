import React, { useState, useEffect } from 'react'

import { useFitDispatch } from './../../../context/fitness'
import { addWorkout } from './../../../actions/fitness'
import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { getSettings } from './../../../actions/settings'

import Layout from './../utils/layout'

export default function AddWorkout() {
  const dispatchFit = useFitDispatch()
  const dispatchSettings = useSettingsDispatch()
  const { fit_exercises, fit_categories, fit_equipment, fit_images, loading } = useSettingsState()

  useEffect(() => { getSettings(dispatchSettings) }, [dispatchSettings])

  const [workoutData, setWorkoutData] = useState({ image: '', name: '', category: '', equipment: '', length: 0, intro: '', warmup: [], workout: [], cooldown: [] })

  const onChange = e => setWorkoutData({ ...workoutData, [e.target.name]: e.target.value })

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const addNewWorkout = async () => {
    setProcessing(true)
    await addWorkout(dispatchFit, workoutData, () => {
      setSuccess(true)
      setProcessing(false)
    }, () => {
      setError(true)
      setProcessing(false)
    })
  }

  const [newWarmup, setNewWarmup] = useState({ name: '', gif: '', reps: '' })
  const [newWorkout, setNewWorkout] = useState({ name: '', gif: '', reps: '' })
  const [newCooldown, setNewCooldown] = useState({ name: '', gif: '', reps: '' })

  const addToArray = (state, arr) => {
    if (state.gif !== '') {
      const exercise_name = fit_exercises && fit_exercises.filter(el => state.gif === el.fit_exercises_gif)[0].fit_exercises_name

      arr.push({ name: exercise_name, gif: state.gif, reps: '30 sek' })

      setWorkoutData({ ...workoutData })
    }
  }

  return <Layout name="Lisa Treening">
    <div className="admin_add_workout admin_page">
      <h3>Treeningu Info</h3>
      <label>Pilt <span className="form_required">*</span></label>
      <div className="admin_add_workout_select_img">
        {
          fit_images && fit_images.map(el => <img key={el} src={el} alt={el} onClick={() => setWorkoutData({ ...workoutData, image: el })} style={workoutData.image === el ? { border: '2px solid var(--dodgerblue)' } : null}/>)
        }
      </div>
      <label>Nimi <span className="form_required">*</span></label>
      <input name="name" value={workoutData.name} onChange={onChange}/>
      <label>Kategooria <span className="form_required">*</span></label>
      <select name="category" id="category" onChange={e => setWorkoutData({ ...workoutData, category: e.target.value })}>
        <option value="" disabled={workoutData.category !== ''}>..</option>
        {
          fit_categories && fit_categories.filter(el => el !== 'jooga').map((el, i) => <option key={i} value={el}>{el}</option>)
        }
      </select>
      <label>Vahendid <span className="form_required">*</span></label>
      <select name="equipment" id="equipment" onChange={e => setWorkoutData({ ...workoutData, equipment: e.target.value })}>
        <option value="" disabled={workoutData.equipment !== ''}>..</option>
        {
          fit_equipment && fit_equipment.map((el, i) => <option key={i} value={el}>{el}</option>)
        }
      </select>
      <label>Kestvus (min) <span className="form_required">*</span></label>
      <input type="number" name="length" value={workoutData.length} onChange={onChange}/>
      <label>Lühikirjeldus (105 tähemärki) <span className="form_required">*</span></label>
      <textarea name="intro" value={workoutData.intro} onChange={onChange} maxLength="105"/>
      <h3>Soojendus</h3>
      <Header />
      {
        workoutData.warmup.length < 1 && <p style={{ fontSize: '.75rem' }}>Lisa soojendusharjutused.</p>
      }
      {
        workoutData.warmup.map((el, i) => <div key={i} className="admin_row admin_add_workout_add_exercise">
          <p>{el.name}</p>
          <p>{el.gif}</p>
          <input name="reps" value={el.reps} onChange={e => {
            workoutData.warmup[i].reps = e.target.value
            setWorkoutData({ ...workoutData })
          }}/>
          <i className="fas fa-times" onClick={() => {
            const newArray = workoutData.warmup.filter(x => x.gif !== el.gif)
            setWorkoutData({ ...workoutData, warmup: newArray })
          }}/>
        </div>)
      }
      <AddExercise set={setNewWarmup} state={newWarmup} name="warmup" condition={workoutData.equipment} fitExercises={fit_exercises} action={() => addToArray(newWarmup, workoutData.warmup)}/>
      <h3>Treening</h3>
      <Header />
      {
        workoutData.workout.length < 1 && <p style={{ fontSize: '.75rem' }}>Lisa harjutused.</p>
      }
      {
        workoutData.workout.map((el, i) => <div key={i} className="admin_row admin_add_workout_add_exercise">
          <p>{el.name}</p>
          <p>{el.gif}</p>
          <input name="reps" value={el.reps} onChange={e => {
            workoutData.workout[i].reps = e.target.value
            setWorkoutData({ ...workoutData })
          }}/>
          <i className="fas fa-times" onClick={() => {
            const newArray = workoutData.workout.filter(x => x.gif !== el.gif)
            setWorkoutData({ ...workoutData, workout: newArray })
          }}/>
        </div>)
      }
      <AddExercise set={setNewWorkout} state={newWorkout} name="workout" fitExercises={fit_exercises} action={() => addToArray(newWorkout, workoutData.workout)}/>
      <h3>Cooldown</h3>
      <Header />
      {
        workoutData.cooldown.length < 1 && <p style={{ fontSize: '.75rem' }}>Lisa lõdvestusharjutused.</p>
      }
      {
        workoutData.cooldown.map((el, i) => <div key={i} className="admin_row admin_add_workout_add_exercise">
          <p>{el.name}</p>
          <p>{el.gif}</p>
          <input name="reps" value={el.reps} onChange={e => {
            workoutData.cooldown[i].reps = e.target.value
            setWorkoutData({ ...workoutData })
          }}/>
          <i className="fas fa-times" onClick={() => {
            const newArray = workoutData.cooldown.filter(x => x.gif !== el.gif)
            setWorkoutData({ ...workoutData, cooldown: newArray })
          }}/>
        </div>)
      }
      <AddExercise set={setNewCooldown} state={newCooldown} name="cooldown" fitExercises={fit_exercises} action={() => addToArray(newCooldown, workoutData.cooldown)}/>
      <button disabled={processing} className="admin_add_workout_save_btn" onClick={addNewWorkout}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
      {success && <p style={{ color: 'rgba(0, 112, 243, 1)', marginLeft: '-10px' }}>Salvestatud.</p>}
      {error && <p style={{ color: 'red', marginLeft: '-10px' }}>Ups. Midagi läks valesti. Täida kõik väljad korrektselt ja proovi uuesti.</p>}
    </div>
  </Layout>
}

const Header = () => <div className="admin_row_header admin_add_workout_add_exercise_header">
  <p>Nimi</p>
  <p>Gif</p>
  <p>Kordused (nt: 45 sek)</p>
</div>

const AddExercise = ({ set, state, name, fitExercises, action }) => <div className="admin_add_workout_exercises_list">
  <select name={name} id={name} onChange={e => set({ ...state, gif: e.target.value   })}>
    <option value="">..</option>
    {
      fitExercises && fitExercises.map((el, i) => <option key={i} value={el.fit_exercises_gif}>{el.fit_exercises_name}</option>)
    }
  </select>
  <button onClick={action}>+</button>
</div>
