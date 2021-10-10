import { INIT_CONFIG, GET_CONFIG, CONFIG_ERROR } from '@actions/types'

export const initialState = {
  loading: true,
  blog: null,
  fitness: null,
  social: [],
  features: [],
  landing: null,
  error: null
}

export const ConfigReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case INIT_CONFIG:
    case GET_CONFIG:
      return {
        ...state,
        loading: false,
        blog: payload.blog,
        fitness: payload.fitness,
        social: payload.social,
        features: payload.features,
        landing: payload.landing
      }
    case CONFIG_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
