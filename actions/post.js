import axios from 'axios'
import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, RATE_POST, COMMENT_POST, LOAD_POSTS, POST_ERROR, ADD_POST_FILTER } from './types'

export const getPosts = async (dispatch) => {
  dispatch({
    type: LOAD_POSTS
  })

  try {
    const { data } = await axios.get('/api/posts')

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
