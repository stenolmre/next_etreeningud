import { INIT_CONFIG, GET_CONFIG, CONFIG_ERROR } from '@actions/types'

export const initialState = {
  blog: null,
  error: null
}

export const ConfigReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case INIT_CONFIG:
    case GET_CONFIG:
      return {
        ...state,
        blog: payload[0].blog
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
