import axios from 'axios'

import { UPDATE_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from './types'

export const getSettings = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/settings/_get')

    dispatch({
      type: GET_SETTINGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })
  }
}

export const updateLanding = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updatelanding?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateFeatures = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updatefeatures?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateSocial = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updatesocial?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateWorkoutDetails = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updateworkoutdetails?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateExercises = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updateexercises?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateBlogCategories = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/updateblogcategories?id=${id}`, body, config)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })

    error()
  }
}
