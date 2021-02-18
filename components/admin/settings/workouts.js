import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateWorkoutDetails } from './../../../actions/settings'

import Loader from './../../utils/loader'

const WorkoutSettings = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, fit_categories, fit_equipment, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [categoriesData, setCategoriesData] = useState({ categories: [] })
  const [equipmentData, setEquipmentData] = useState({ equipments: [] })

  useEffect(() => {
    setCategoriesData(categoriesData => ({ ...categoriesData,
      categories: !fit_categories ? [] : fit_categories,
    })),
    setEquipmentData(equipmentData => ({ ...equipmentData,
      equipments: !fit_equipment ? [] : fit_equipment,
    }))
  }, [fit_categories, fit_equipment])

  const addNewCategory = () => {
    categoriesData.categories.push('')
    setCategoriesData({ ...categoriesData })
  }

  const addNewEquipment = () => {
    equipmentData.equipments.push('')
    setEquipmentData({ ...equipmentData })
  }

  const saveUpdatedWorkoututils = async () => {
    setProcessing(true)
    await updateWorkoutDetails(dispatchSettings, {
      fit_categories: categoriesData.categories,
      fit_equipment: equipmentData.equipments
    }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page admin_settings_workout">
        <h3>Treeningkategooriad</h3>
        {
          fit_categories && categoriesData.categories.map((el, i) => <Fragment key={i}>
            <input name="category" value={categoriesData.categories[i]}
              onChange={e => {
                categoriesData.categories[i] = e.target.value
                setCategoriesData({ ...categoriesData })
            }}/>
            <i className="fas fa-times" onClick={() => {
              const newArray = categoriesData.categories.filter((x, index) => index !== i)
              setCategoriesData({ ...categoriesData, categories: newArray })
            }}/>
          </Fragment>)
        }
        <div>
          <button className="admin_settings_add_writer_btn" onClick={addNewEquipment}><i className="fas fa-plus"/></button>
        </div>
        <h3>Treeningvahendid</h3>
        {
          fit_categories && equipmentData.equipments.map((el, i) => <Fragment key={i}>
            <input name="equipment" value={equipmentData.equipments[i]}
              onChange={e => {
                equipmentData.equipments[i] = e.target.value
                setEquipmentData({ ...equipmentData })
            }}/>
            <i className="fas fa-times" onClick={() => {
              const newArray = equipmentData.equipments.filter((x, index) => index !== i)
              setEquipmentData({ ...equipmentData, equipments: newArray })
            }}/>
          </Fragment>)
        }
        <div>
          <button className="admin_settings_add_writer_btn" onClick={addNewEquipment}><i className="fas fa-plus"/></button>
        </div>
        <div style={{ marginTop: '25px' }}>
          <button onClick={saveUpdatedWorkoututils} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Salvestatud.</p>}
          {err && <p>{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}

export default WorkoutSettings
