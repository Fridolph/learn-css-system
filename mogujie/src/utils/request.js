import axios from 'axios'

const service = axios.create({})

service.intercepors.request.use(
  config => {
    return config
  }
)

service.interceptors.response.use(
  response => {}
)

export default service
