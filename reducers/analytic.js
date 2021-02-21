import { ADD_ANALYTIC, GET_ANALYTICS, ANALYTICS_ERROR } from './../actions/types'

export const initialState = {
  analytics: [],
  loading: true,
  error: null
}

export const AnalyticReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_ANALYTIC:
    case GET_ANALYTICS:
      return {
        ...state,
        analytics: payload,
        loading: false,
        error: null
      }
    case ANALYTICS_ERROR:
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
