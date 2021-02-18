import { ADD_WRITER, UPDATE_WRITER, REMOVE_WRITER, GET_WRITER, GET_WRITERS, WRITER_ERROR } from './../actions/types'

export const initialState = {
  writer: null,
  writers: [],
  loading: true,
  error: null
}

export const WriterReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_WRITER:
      return {
        ...state,
        writer: payload,
        loading: false,
        error: null
      }
    case ADD_WRITER:
    case REMOVE_WRITER:
    case GET_WRITERS:
      return {
        ...state,
        writers: payload,
        loading: false,
        error: null
      }
    case UPDATE_WRITER:
      return {
        ...state,
        writer: payload.writer,
        writers: payload.writers,
        loading: false,
        error: null
      }
    case WRITER_ERROR:
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
