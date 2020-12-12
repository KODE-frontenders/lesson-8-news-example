import axiosInstance from 'axios'
import { TokenService } from './token-service'

const axios = axiosInstance.create({
  baseURL: 'https://www.utair.ru/mobile/api/v8',
  responseType: 'json',
})
const tokenService = TokenService({
  axiosInstance: axios,
  onAccessFailure: () => console.log('failure access'),
  onRefreshFailure: () => console.log('failure refresh'),
  sessionsGuestUrl: 'https://www.utair.ru/mobile/api/v8/sessions/guest',
  sessionsRefreshUrl: 'https://www.utair.ru/mobile/api/v8/sessions/refresh',
  storageKey: 'mobile:tokens',
})

axios.interceptors.request.use(tokenService.onFullfilledRequest)
axios.interceptors.response.use(undefined, tokenService.onRejectedResponse)

export default axios
