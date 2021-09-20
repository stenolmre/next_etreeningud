import axios from 'axios'

export default function setAuthToken(token) {
  if (token) return axios.defaults.headers.common['x-auth-token'] = token
  return delete axios.defaults.headers.common['x-auth-token']
}
