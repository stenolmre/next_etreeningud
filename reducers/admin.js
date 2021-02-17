import { LOGIN_ADMIN, ADD_ADMIN, UPDATE_ADMIN, REMOVE_ADMIN, GET_ADMIN, GET_ADMINS, ADMIN_ERROR } from './../actions/types'

export const initialState = {
  admin: null,
  admins: [],
  loading: true,
  error: null
}

export const AdminReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_ADMIN:
    case GET_ADMIN:
      return {
        ...state,
        admin: payload,
        loading: false,
        error: null
      }
    case ADD_ADMIN:
    case REMOVE_ADMIN:
    case GET_ADMINS:
      return {
        ...state,
        admins: payload,
        loading: false,
        error: null
      }
    case UPDATE_ADMIN:
      return {
        ...state,
        admin: payload.admin,
        admins: payload.admins,
        loading: false,
        error: null
      }
    case ADMIN_ERROR:
      return {
        ...state,
        admin: null,
        admins: [],
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
