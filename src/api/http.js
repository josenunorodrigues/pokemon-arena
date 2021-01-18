import axios from 'axios'
import https from 'https'

const agent = new https.Agent({
  rejectUnauthorized: false
});

/* create */
const http = axios.create({
  baseURL: ``,
  timeout: 120000,
  json: true,
  responseType: 'json',
  httpsAgent: agent,
})

http.interceptors.request.use((config) => {
  return config
}, function (error) {
  return Promise.reject(error)
})

export default http
