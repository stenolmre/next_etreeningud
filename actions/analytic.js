import axios from 'axios'

import { GET_ANALYTICS, ANALYTICS_ERROR } from './types'

export const getAnalytics = async dispatch => {
  try {
    const { data } = await axios.get('/api/analytic/_get')

    dispatch({
      type: GET_ANALYTICS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: ANALYTICS_ERROR,
      payload: err.response.data,
    })
  }
}
