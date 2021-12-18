import { GET_CONFIG } from '@actions/types'

export const initialState = {
  fitness: {
    categories: [],
    images: [],
    exercises: []
  },
  post: {
    categories: []
  },
  landing: {
    title: '',
    subtitle: ''
  },
  writers: [],
  loading: true,
  error: null
}

export const ConfigReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CONFIG:
      return {
        ...state,
        fitness: {
          categories: payload.fit.categories,
          images: payload.fit.images,
          exercises: payload.fit.exercises
        },
        post: {
          categories: payload.blog.categories
        },
        landing: {
          title: payload.landing.title,
          subtitle: payload.landing.subtitle
        },
        writers: payload.writers,
        loading: false
      }
    default:
      return {
        state
      }
  }
}
