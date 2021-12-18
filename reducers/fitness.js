import { GET_WORKOUT, GET_WORKOUTS, FITNESS_ERROR, FILTER_FITNESS, SORT_FITNESS } from '@actions/types'

export const initialState = {
  workout: null,
  fitness: [],
  loading: true,
  error: null,
  filters: [],
  sortBy: 'uuemad enne'
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
    case GET_WORKOUTS:
      return {
        ...state,
        fitness: payload,
        loading: false,
        error: null
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
    case SORT_FITNESS:
      return {
        ...state,
        sortBy: payload
      }
    default:
      return {
        state
      }
  }
}
