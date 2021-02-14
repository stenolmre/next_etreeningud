import { ADD_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from './../actions/types'

export const initialState = {
  fit_exercises: [],
  fit_categories: [],
  fit_equipment: [],
  social: [],
  loading: true,
  error: null
}

export const SettingsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_SETTINGS:
    case GET_SETTINGS:
      return {
        ...state,
        fit_exercises: payload[0].fit_exercises,
        fit_categories: payload[0].fit_categories,
        fit_equipment: payload[0].fit_equipment,
        social: payload[0].social,
        loading: false,
        error: null
      }
    case SETTINGS_ERROR:
      return {
        ...state,
        settings: null,
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
