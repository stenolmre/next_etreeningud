import axios from 'axios'

import { ADD_SETTINGS, GET_SETTINGS, SETTINGS_ERROR } from './types'

export const getSettings = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/settings/_get')

    dispatch({
      type: GET_SETTINGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: SETTINGS_ERROR,
      payload: err.response.data
    })
  }
}
