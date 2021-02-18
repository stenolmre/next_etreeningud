import axios from 'axios'

import { ADD_WRITER, UPDATE_WRITER, REMOVE_WRITER, GET_WRITER, GET_WRITERS, WRITER_ERROR } from './types'

export const addWriter = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/writer/add', body, config)

    dispatch({
      type: ADD_WRITER,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: WRITER_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updateWriter = async (dispatch, id, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post(`/api/writer/update?id=${id}`, body, config)

    dispatch({
      type: UPDATE_WRITER,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: WRITER_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const getWriter = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`/api/writer/get?id=${id}`)

    dispatch({
      type: GET_WRITER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: WRITER_ERROR,
      payload: err.response.data
    })
  }
}

export const getWriters = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/writer/_get')

    dispatch({
      type: GET_WRITERS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: WRITER_ERROR,
      payload: err.response.data
    })
  }
}

export const removeWriter = async (dispatch, id) => {
  try {
    const { data } = await axios.delete(`/api/writer/delete?id=${id}`)

    dispatch({
      type: REMOVE_WRITER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: WRITER_ERROR,
      payload: err.response.data
    })
  }
}
