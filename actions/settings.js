import axios from 'axios'

import { UPDATE_SETTINGS, GET_SETTINGS, GET_WRITER, SETTINGS_ERROR } from './types'

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

export const getWriter = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`/api/settings/getwriter?id=${id}`)

    dispatch({
      type: GET_WRITER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })
  }
}

export const addWriter = async (dispatch, data, id, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/addwriter?id=${id}`, body, config)

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

export const updateWriter = async (dispatch, data, id, writerId, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/settings/addwriter?id=${id}&writerId=${writerId}`, body, config)

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

export const removeWriter = async (dispatch, id, writerId) => {
  try {
    const { data } = await axios.put(`/api/settings/removewriter?id=${id}&writerId=${writerId}`)

    dispatch({
      type: UPDATE_SETTINGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })
  }
}
