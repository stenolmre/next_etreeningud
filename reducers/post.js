import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, RATE_POST, COMMENT_POST, LOAD_POSTS, POST_ERROR, FILTER_POSTS, SORT_POSTS } from '@actions/types'

export const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: null,
  filters: [],
  sortBy: 'uuemad enne'
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
    case RATE_POST:
      return {
        ...state,
        post: { ...state.post, ratings: payload },
        loading: false,
        error: null
      }
    case COMMENT_POST:
      return {
        ...state,
        post: { ...state.post, comments: payload },
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
        loading: false,
        error: payload
      }
    case FILTER_POSTS:
      return {
        ...state,
        filters: payload
      }
    case SORT_POSTS:
      return {
        ...state,
        sortBy: payload
      }
    default:
      return {
        state
      }
  }
}
