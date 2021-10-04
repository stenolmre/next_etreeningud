import axios from 'axios'

const setAuthToken = token => {
  if (token) return axios.defaults.headers.common['x-auth-token'] = token
  return delete axios.defaults.headers.common['x-auth-token']
}

export default setAuthToken
