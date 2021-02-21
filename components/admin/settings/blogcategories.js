import React, { Fragment, useState, useEffect } from 'react'

import { useSettingsState, useSettingsDispatch } from './../../../context/settings'
import { updateBlogCategories } from './../../../actions/settings'

import Loader from './../../utils/loader'

const BlogCategories = () => {
  const dispatchSettings = useSettingsDispatch()
  const { id, blog_categories, loading, error } = useSettingsState()

  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)

  const [categoriesData, setCategoriesData] = useState({ categories: [] })

  useEffect(() => {
    setCategoriesData(categoriesData => ({ ...categoriesData,
      categories: !blog_categories ? [] : blog_categories
    }))
  }, [blog_categories])

  const addNewCategory = () => {
    categoriesData.categories.push('')
    setCategoriesData({ ...categoriesData })
  }

  const saveUpdatedBlogUtils = async () => {
    setProcessing(true)
    await updateBlogCategories(dispatchSettings, {
      blog_categories: categoriesData.categories
    }, id, () => setSuccess(true), () => setErr(true))
    setProcessing(false)
  }

  return <Fragment>
    {
      loading ? <div><Loader/></div> : <div className="admin_settings_page admin_settings_workout">
        <h3>Blogi Kategooriad</h3>
        {
          blog_categories && categoriesData.categories.map((el, i) => <Fragment key={i}>
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
          <button className="admin_settings_add_writer_btn" onClick={addNewCategory}><i className="fas fa-plus"/></button>
        </div>
        <div style={{ marginTop: '25px' }}>
          <button onClick={saveUpdatedBlogUtils} disabled={processing}>{processing ? 'Salvestan..' : 'Salvesta'}</button>
          {success && <p className="form_success">Salvestatud.</p>}
          {err && <p>{error && error.msg}</p>}
        </div>
      </div>
    }
  </Fragment>
}

export default BlogCategories
