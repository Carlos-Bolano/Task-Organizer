import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-task-manager-production.up.railway.app/api',
  withCredentials: true
})

export default instance
