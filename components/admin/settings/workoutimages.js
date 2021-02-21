import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateFitImages } from './../../../actions/settings'

import Loader from './../../utils/loader'

const WorkoutImages = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, fit_images, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [images, setImages] = useState({ all_images: [] })
  const [newImage, setNewImage] = useState('')
  const [deleteImage, setDeleteImage] = useState('')

  const onChange = e => setImages({ ...images, [e.target.name]: e.target.value })

  useEffect(() => {
    setImages(images => ({ ...images,
      all_images: !fit_images ? [] : fit_images,
    }))
  }, [fit_images])

  const addNewImage = () => {
    images.all_images.push(newImage)
    setImages({ ...images })
  }

  const removeImageFromArray = () => {
    const newArr = images.all_images.filter(x => x !== deleteImage)
    setImages({ all_images: newArr })
    setDeleteImage('')
  }

  const saveUpdatedFeatures = async () => {
    setProcessing(true)
    await updateFitImages(dispatchSettings, { fit_images: images.all_images }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page">
        <h3>Treeningute Pildid</h3>
        <div className="admin_add_workout_select_img">
        {
          fit_images && images.all_images.map((el, i) => <img key={i} src={el} alt={el} onClick={() => setDeleteImage(el)} style={deleteImage === el ? { border: '2px solid var(--dodgerblue)' } : null}/>)
        }
        </div>
        <div style={{ margin: '25px 0 50px 0' }}>
          <button disabled={deleteImage === ''} style={deleteImage === '' ? { background: 'red', opacity: '.2' } : { background: 'red', opacity: '1' }} onClick={removeImageFromArray}>Kustuta</button>
        </div>
        <h3>Lisa Uus Pilt</h3>
        <div>
          <input style={{ width: '60%', margin: '0 2px 0 0', padding: '5px' }} value={newImage} onChange={e => setNewImage(e.target.value)}/>
          <button className="admin_settings_add_writer_btn" onClick={addNewImage}><i className="fas fa-plus"/></button>
        </div>
        <div style={{ marginTop: '50px' }}>
          <button onClick={saveUpdatedFeatures} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Salvestatud.</p>}
          {err && <p>{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}

export default WorkoutImages
