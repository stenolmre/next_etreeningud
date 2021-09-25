import axios from 'axios'
import { ADD_WORKOUT, UPDATE_WORKOUT, REMOVE_WORKOUT, GET_WORKOUT, GET_WORKOUTS, LOAD_FITNESS, FITNESS_ERROR, ADD_FIT_FILTER } from './types'

export const getWorkouts = async (dispatch) => {
  dispatch({
    type: LOAD_FITNESS
  })

  try {
    const { data } = await axios.get('/api/fitness')

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

export const addFitFilter = (dispatch, data) => {
  dispatch({
    type: ADD_FIT_FILTER,
    payload: data
  })
}
