import { LOGIN_USER, ADD_USER, UPDATE_USER, REMOVE_USER, GET_USER, GET_USERS, USER_LOGOUT, USER_ERROR } from '@actions/types'

export const initialState = {
  user: null,
  users: [],
  loading: true,
  error: null
}

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_USER:
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null
      }
    case ADD_USER:
    case REMOVE_USER:
    case GET_USERS:

      return {
        ...state,
        users: payload,
        loading: false,
        error: null
      }
    case UPDATE_USER:
      return {
        ...state,
        user: payload.USER,
        users: payload.USERs,
        loading: false,
        error: null
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        users: [],
        loading: false,
        error: null
      }
    case USER_ERROR:
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
