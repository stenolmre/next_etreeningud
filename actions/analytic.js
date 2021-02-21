import axios from 'axios'

import { ADD_ANALYTIC, GET_ANALYTICS, ANALYTICS_ERROR } from './types'

export const addAnalytic = async (dispatch, data, success) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/analytic/add', body, config)

    dispatch({
      type: ADD_ANALYTIC,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: ANALYTICS_ERROR,
      payload: err.response.data
    })
  }
}

export const getAnalytics = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/analytic/_get')

    dispatch({
      type: GET_ANALYTICS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ANALYTICS_ERROR,
      payload: err.response.data
    })
  }
}
