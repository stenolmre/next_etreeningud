import axios from 'axios'

import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, LOAD_POSTS, POST_ERROR } from './types'

export const addPost = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/posts/add', body, config)

    dispatch({
      type: ADD_POST,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const updatePost = async (dispatch, id, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post(`/api/posts/update?id=${id}`, body, config)

    dispatch({
      type: UPDATE_POST,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })

    error()
  }
}

export const getPost = async (dispatch, id) => {
  dispatch({
    type: LOAD_POSTS
  })

  try {
    const { data } = await axios.get(`/api/posts/get?id=${id}`)

    dispatch({
      type: GET_POST,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })
  }
}

export const getPosts = async (dispatch) => {
  dispatch({
    type: LOAD_POSTS
  })

  try {
    const { data } = await axios.get('/api/posts/_get')

    dispatch({
      type: GET_POSTS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })
  }
}

export const removePost = async (dispatch, id) => {
  try {
    const { data } = await axios.delete(`/api/posts/get?id=${id}`)

    dispatch({
      type: REMOVE_POST,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })
  }
}
