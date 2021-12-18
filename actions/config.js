import axios from 'axios'

import { GET_CONFIG } from './types'

export const getConfig = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/config/_get')

    dispatch({
      type: GET_CONFIG,
      payload: data
    })
  } catch (err) {
    console.debug(err)
  }
}
