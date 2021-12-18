import axios from 'axios'

import { GET_WORKOUT, GET_WORKOUTS, FITNESS_ERROR, FILTER_FITNESS, SORT_FITNESS } from '@actions/types'

export const getWorkout = async (dispatch, id) => {
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
