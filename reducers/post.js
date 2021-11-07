import { ADD_POST, UPDATE_POST, REMOVE_POST, GET_POST, GET_POSTS, RATE_POST, COMMENT_POST, LOAD_POSTS, POST_ERROR, ADD_POST_FILTER } from '@actions/types'

export const initialState = {
  post: null,
  posts: [],
  loading: true,
  sortBy: {
    Latest: true,
    Oldest: false,
    AZ: false,
    ZA: false
  },
  filterBy: {
    category: null,
    author: null
  },
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
    case ADD_POST_FILTER:
      const hasFilterKey = Object.keys(payload).map(el => Object.keys(state.sortBy).includes(el)).toString() === 'true' ? true : false
      return {
        ...state,
        sortBy: {
          Latest: payload.Latest != null ? payload.Latest : hasFilterKey ? false : state.sortBy.Latest,
          Oldest: payload.Oldest != null ? payload.Oldest : hasFilterKey ? false : state.sortBy.Oldest,
          AZ: payload.AZ != null ? payload.AZ : hasFilterKey ? false : state.sortBy.AZ,
          ZA: payload.ZA != null ? payload.ZA : hasFilterKey ? false : state.sortBy.ZA
        },
        filterBy: {
          category: payload.hasOwnProperty('category') ? payload.category : state.filterBy.category,
          author: payload.hasOwnProperty('author') ? payload.author : state.filterBy.author
        }
      }
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
