import { UPDATE_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from './../actions/types'

export const initialState = {
  id: null,
  fit_exercises: [],
  fit_categories: [],
  fit_equipment: [],
  social: [],
  blog_writers: [],
  features: [],
  landing: null,
  loading: true,
  error: null
}

export const SettingsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_SETTINGS:
    case GET_SETTINGS:
      return {
        ...state,
        id: payload[0]._id,
        fit_exercises: payload[0].fit_exercises,
        fit_categories: payload[0].fit_categories,
        fit_equipment: payload[0].fit_equipment,
        social: payload[0].social,
        blog_writers: payload[0].blog_writers,
        features: payload[0].features,
        landing: payload[0].landing,
        loading: false,
        error: null
      }
    case SETTINGS_ERROR:
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
