import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateFeatures } from './../../../actions/settings'

import Loader from './../../utils/loader'

const Landing = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, features, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [featureData, setFeatureData] = useState({ all_features: [] })

  const onChange = e => setFeatureData({ ...featureData, [e.target.name]: e.target.value })

  useEffect(() => {
    setFeatureData(featureData => ({ ...featureData,
      all_features: !features ? [] : features,
    }))
  }, [features])

  const addNewFeature = () => {
    featureData.all_features.push({ feature_name: '', feature_info: '' })
    setFeatureData({ ...featureData })
  }

  const saveUpdatedFeatures = async () => {
    setProcessing(true)
    await updateFeatures(dispatchSettings, { features: featureData.all_features }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page">
        <h3>Features</h3>
        {
          features && featureData.all_features.map((el, i) => <Fragment key={i}>
            {i !== 0 && <hr />}
            <label>Feature Name</label>
            <input name="feature_name" value={featureData.all_features[i].feature_name}
              onChange={e => {
                featureData.all_features[i].feature_name = e.target.value
                setFeatureData({ ...featureData })
            }}/>
            <label>Feature Info</label>
            <textarea name="feature_info" value={featureData.all_features[i].feature_info}
              onChange={e => {
                featureData.all_features[i].feature_info = e.target.value
                setFeatureData({ ...featureData })
            }}/>
            <i className="fas fa-trash" onClick={() => {
              const newArray = featureData.all_features.filter((x, index) => index !== i)
              setFeatureData({ ...featureData, all_features: newArray })
            }}/>
          </Fragment>)
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
