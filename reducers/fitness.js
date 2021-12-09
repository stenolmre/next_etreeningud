import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT,
  GET_WORKOUT,
  GET_WORKOUTS,
  LOAD_FITNESS,
  FITNESS_ERROR,
  FILTER_FITNESS
} from '@actions/types'

export const initialState = {
  workout: null,
  fitness: [],
  loading: true,
  error: null,
  filters: []
}

export const FitnessReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        workout: payload,
        loading: false,
        error: null
      }
    case ADD_WORKOUT:
    case REMOVE_WORKOUT:
    case GET_WORKOUTS:
      return {
        ...state,
        fitness: payload,
        loading: false,
        error: null
      }
    case UPDATE_WORKOUT:
      return {
        ...state,
        workout: payload.workout,
        fitness: payload.fitness,
        loading: false,
        error: null
      }
    case LOAD_FITNESS:
      return {
        ...state,
        loading: true
      }
    case FITNESS_ERROR:
      return {
        ...state,
        workout: null,
        fitness: [],
        loading: false,
        error: payload
      }
    case FILTER_FITNESS:
      return {
        ...state,
        filters: payload
      }
    default:
      return {
        state
      }
  }
}
