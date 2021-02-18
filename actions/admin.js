import axios from 'axios'
import Cookies from 'js-cookie'

import setAuthToken from './../utils/setAuthToken'

import { LOGIN_ADMIN, ADD_ADMIN, UPDATE_ADMIN, REMOVE_ADMIN, GET_ADMIN, GET_ADMINS, ADMIN_LOGOUT, ADMIN_ERROR } from './types'

const user_token = Cookies.get('user_token') ? Cookies.get('user_token') : ''

export const loginAdmin = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/admin/login', body, config)

    Cookies.set('user_token', data.token)

    dispatch({
      type: LOGIN_ADMIN,
      payload: data.admin
    })

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const addAdmin = async (dispatch, data, success, error) => {
  setAuthToken(user_token)

  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/admin/add', body, config)

    dispatch({
      type: ADD_ADMIN,
      payload: data.admins
    })

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateAdmin = async (dispatch, data, success, error) => {
  setAuthToken(user_token)

  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/admin/update', body, config)

    dispatch({
      type: UPDATE_ADMIN,
      payload: data
    })

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const removeAdmin = async (dispatch, id) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.delete(`/api/admin/delete?id=${id}`)

    dispatch({
      type: REMOVE_ADMIN,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })
  }
}

export const getAdmin = async (dispatch, id) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.get('/api/admin/get')

    dispatch({
      type: GET_ADMIN,
      payload: data.admin
    })
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })
  }
}

export const getAdmins = async (dispatch, id) => {
  setAuthToken(user_token)

  try {
    const { data } = await axios.get('/api/admin/_get')

    dispatch({
      type: GET_ADMINS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data
    })
  }
}

export const logoutAdmin = async (dispatch, redirect) => {
  Cookies.remove('user_token')

  dispatch({
    type: ADMIN_LOGOUT
  })

  redirect()
}
