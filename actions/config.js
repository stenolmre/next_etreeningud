import axios from 'axios'

import { INIT_CONFIG, GET_CONFIG, CONFIG_ERROR } from './types'

export const getConfig = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/config')

    dispatch({
      type: GET_CONFIG,
      payload: data[0]
    })
  } catch (error) {
    dispatch({
      type: CONFIG_ERROR,
      payload: error.response.data
    })
  }
}

export const initConfig = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/config', body, config)

    dispatch({
      type: INIT_CONFIG,
      payload: data[0]
    })
  } catch (error) {
    dispatch({
      type: CONFIG_ERROR,
      payload: error.response.data
    })
  }
}
