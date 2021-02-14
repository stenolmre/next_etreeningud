import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, LOAD_POSTS, POST_ERROR } from './../actions/types'

export const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null
}

export const PostReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
        error: null
      }
    case ADD_POST:
    case REMOVE_POST:
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: null
      }
    case UPDATE_POST:
      return {
        ...state,
        post: payload.post,
        posts: payload.posts,
        loading: false,
        error: null
      }
    case LOAD_POSTS:
      return {
        ...state,
        loading: true
      }
    case POST_ERROR:
      return {
        ...state,
        post: null,
        posts: [],
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
