import axios from 'axios'
import Cookies from 'js-cookie'

import setAuthToken from '@utils/setAuthToken'

import { LOGIN_USER, USER_LOGOUT, GET_USER, GET_USERS, USER_ERROR } from './types'

const user_token = Cookies.get('user_token') ? Cookies.get('user_token') : ''

export const login = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/user/login', body, config)

    Cookies.set('user_token', data.token)

    dispatch({
      type: LOGIN_USER,
      payload: data.user
    })

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const register = async (dispatch, data, success) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/user/add', body, config)

    Cookies.set('user_token', data.token)

    dispatch({
      type: LOGIN_USER,
      payload: data.user
    })

    if (data.status === 'success') {
      success()
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.data
    })
  }
}

export const getUser = async (dispatch, success, error) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.get('/api/user')

    dispatch({
      type: GET_USER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    })
  }
}

export const getUsers = async (dispatch, success, error) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.get('/api/user')
    console.log(data)
    dispatch({
      type: GET_USERS,
      payload: data.users
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    })
  }
}

export const logout = async (dispatch, redirect) => {
  dispatch({
    type: USER_LOGOUT
  })

  redirect()

  Cookies.remove('user_token')
}
