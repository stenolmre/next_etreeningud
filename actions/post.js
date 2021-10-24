import axios from 'axios'
import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, RATE_POST, COMMENT_POST, LOAD_POSTS, POST_ERROR, ADD_POST_FILTER } from './types'

export const getPosts = async (dispatch) => {
  dispatch({
    type: LOAD_POSTS
  })

  try {
    const { data } = await axios.get('/api/post')

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

export const addPostFilter = (dispatch, data) => {
  dispatch({
    type: ADD_POST_FILTER,
    payload: data
  })
}

export const publishPost = async (dispatch, new_post) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(new_post)

  try {
    const { data } = await axios.post('/api/post', body, config)

    dispatch({
      type: ADD_POST,
      payload: data
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: POST_ERROR,
      payload: err.response.data
    })
  }
}
