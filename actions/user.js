import axios from 'axios'
import Cookies from 'js-cookie'

import setAuthToken from '@utils/setAuthToken'

import { LOGIN_USER, USER_LOGOUT, GET_USER, USER_ERROR } from './types'

const user_token = Cookies.get('user_token') ? Cookies.get('user_token') : ''

export const login = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/admin/login', body, config)

    Cookies.set('user_token', data.token)

    dispatch({
      type: LOGIN_USER,
      payload: data.admin
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

export const getUser = async (dispatch, success, error) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.get('/api/admin/get')

    dispatch({
      type: GET_USER,
      payload: data.admin
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data
    })
  }
}
