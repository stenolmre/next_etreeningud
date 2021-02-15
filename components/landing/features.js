import React, { useEffect } from 'react'

import { useSettingsState } from './../../context/settings'
import { getSettings } from './../../actions/settings'

const Features = () => {
  const { features } = useSettingsState()

  return <div className="features_container">
    <h2>Miks eTreeningud?</h2>
    <p>eTreeningute keskkonda kasutavad inimesed üle kogu maailma.</p>
    <div className="features">
      {
        features && features.map(el => <div key={el._id} className="feature">
          <h3>{el.feature_name}</h3>
          <p>{el.feature_info}</p>
        </div>)
      }
    </div>
  </div>
}

export default Features
