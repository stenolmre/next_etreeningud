import { GET_POST, GET_POSTS, POST_ERROR, FILTER_POSTS, SORT_POSTS } from '@actions/types'

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
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: null
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
