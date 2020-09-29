import axios from 'axios'
import { getToken } from "../utils/auth"

// create an axios instance   请求拦截
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url 
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(//请求拦截
  config => {
    if (getToken()) {
      config.headers['X-Token'] = getToken()

    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(//响应拦截
  response => {
    const res = response
      return res
  
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
