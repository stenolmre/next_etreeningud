import { ADD_WORKOUT, UPDATE_WORKOUT, REMOVE_WORKOUT, GET_WORKOUT, GET_WORKOUTS, LOAD_FITNESS, FITNESS_ERROR, ADD_FIT_FILTER } from '@actions/types'

export const initialState = {
  workout: null,
  fitness: [],
  loading: true,
  sortBy: {
    Latest: true,
    Oldest: false,
    AZ: false,
    ZA: false
  },
  filterBy: {
    type: null,
    equipment: null
  },
  error: null
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
    case ADD_FIT_FILTER:
      const hasFilterKey = Object.keys(payload).map(el => Object.keys(state.sortBy).includes(el)).toString() === 'true' ? true : false
      return {
        ...state,
        sortBy: {
          Latest: payload.Latest != null ? payload.Latest : hasFilterKey ? false : state.sortBy.Latest,
          Oldest: payload.Oldest != null ? payload.Oldest : hasFilterKey ? false : state.sortBy.Oldest,
          AZ: payload.AZ != null ? payload.AZ : hasFilterKey ? false : state.sortBy.AZ,
          ZA: payload.ZA != null ? payload.ZA : hasFilterKey ? false : state.sortBy.ZA
        },
        filterBy: {
          type: payload.hasOwnProperty('type') ? payload.type : state.filterBy.type,
          equipment: payload.hasOwnProperty('equipment') ? payload.equipment : state.filterBy.equipment
        }
      }
    case FITNESS_ERROR:
      return {
        ...state,
        workout: null,
        fitness: [],
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
