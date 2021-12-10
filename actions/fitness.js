import axios from 'axios'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT,
  GET_WORKOUT,
  GET_WORKOUTS,
  LOAD_FITNESS,
  FITNESS_ERROR,
  FILTER_FITNESS,
  SORT_FITNESS
} from '@actions/types'

export const addWorkout = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/fitness/add', body, config)

    dispatch({
      type: ADD_WORKOUT,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateWorkout = async (dispatch, id, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post(`/api/fitness/update?id=${id}`, body, config)

    dispatch({
      type: UPDATE_WORKOUT,
      payload: data
    })

    success()
  } catch (err) {
    error()

    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })
  }
}

export const getWorkout = async (dispatch, id) => {
  dispatch({
    type: LOAD_FITNESS
  })

  try {
    const { data } = await axios.get(`/api/fitness/get?id=${id}`)

    dispatch({
      type: GET_WORKOUT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })
  }
}

export const getWorkouts = async (dispatch) => {
  dispatch({
    type: LOAD_FITNESS
  })

  try {
    const { data } = await axios.get('/api/fitness/_get')

    dispatch({
      type: GET_WORKOUTS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })
  }
}

export const removeWorkout = async (dispatch, id) => {
  try {
    const { data } = await axios.delete(`/api/fitness/delete?id=${id}`)

    dispatch({
      type: REMOVE_WORKOUT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })
  }
}

export const filterFit = async (dispatch, filters, value) => {
  let new_filters = filters

  if (Array.isArray(value)) {
    new_filters = value
  } else if (filters.includes(value)) {
    new_filters = filters.filter(x => x != value)
  } else {
    new_filters.push(value)
  }

  try {
    await dispatch({
      type: FILTER_FITNESS,
      payload: new_filters
    })
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err
    })
  }
}

export const sortFit = async (dispatch, value) => {
  try {
    await dispatch({
      type: SORT_FITNESS,
      payload: value
    })
  } catch (err) {
    dispatch({
      type: FITNESS_ERROR,
      payload: err
    })
  }
}
