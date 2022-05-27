import axios from 'axios'

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 3000,
  headers: {
    codetype: Date.parse(new Date()) / 1000
  }
})

service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  return Promise.reject(new Error(message))
})

export default service
