import axios from './axios.js'

export const getMenu = ()=> {
  return axios.request({
    url:'menu',
    method:'get'
  })
}