import axios from 'axios'

import { ADD_WORKOUT, UPDATE_WORKOUT, REMOVE_WORKOUT, GET_WORKOUT, GET_WORKOUTS, LOAD_FITNESS, FITNESS_ERROR } from './types'

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
    error()

    dispatch({
      type: FITNESS_ERROR,
      payload: err.response.data
    })
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
    const { data } = await axios.delete(`/api/fitness/get?id=${id}`)

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
