import axios from 'axios'

import { GET_POST, GET_POSTS, POST_ERROR, FILTER_POSTS, SORT_POSTS } from './types'

export const getPost = async (dispatch, id) => {
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

export const filterPosts = async (dispatch, filters, value) => {
  let new_filters = filters

  if (Array.isArray(value)) {
    new_filters = value
  } else if (filters.includes(value)) {
    new_filters = filters.filter(x => x != value)
  } else {
    new_filters.push(value)
  }

  try {
    await dispatch({
      type: FILTER_POSTS,
      payload: new_filters
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err
    })
  }
}

export const sortPosts = async (dispatch, value) => {
  try {
    await dispatch({
      type: SORT_POSTS,
      payload: value
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err
    })
  }
}
