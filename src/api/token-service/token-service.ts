import instance, { AxiosInstance } from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type {
  Tokens,
  SessionsGuestResult,
  SessionsRefreshResult,
} from './types'

const sessionsGuestRequest = {
  appVersion: '5.7.0',
  brandName: 'Web',
  lang: 'ru',
  model: 'Web',
  osVersion: 'Web',
  platform: 'web',
  screenResolution: 'Web',
  udid: Constants.installationId,
  // expireAccessTokenTime: 20,
  // expireRefreshTokenTime: 10,
}

interface TokenServiceProps {
  onRefreshFailure: () => void
  onAccessFailure: () => void
  axiosInstance: AxiosInstance
  sessionsGuestUrl: string
  sessionsRefreshUrl: string
  storageKey: string
}

export const TokenService = ({
  onRefreshFailure,
  onAccessFailure,
  sessionsGuestUrl,
  sessionsRefreshUrl,
  axiosInstance,
  storageKey,
}: TokenServiceProps) => {
  const axios = instance.create({})
  const queue: Array<(value: boolean) => void> = []

  let isFetching: boolean = false

  const getTokens = async (): Promise<Tokens | null> => {
    const tokensString = await AsyncStorage.getItem(storageKey)
    if (!tokensString) {
      return null
    }
    try {
      return JSON.parse(tokensString)
    } catch (e) {
      return null
    }
  }

  const success = async (tokens: Tokens) => {
    await AsyncStorage.setItem(storageKey, JSON.stringify(tokens))
    while (queue.length) {
      queue.pop()?.(true)
    }
    isFetching = false
  }

  const failure = async () => {
    await AsyncStorage.removeItem(storageKey)
    while (queue.length) {
      queue.pop()?.(false)
    }
    isFetching = false
  }

  const sessionsGuest = async () => {
    try {
      const { data } = await axios.post<SessionsGuestResult>(
        sessionsGuestUrl,
        sessionsGuestRequest,
      )
      await success({
        accessToken: data.token,
        refreshToken: data.refresh_token,
      })
    } catch (e) {
      console.log({ e })
      await failure()
      onAccessFailure()
    }
  }

  const sessionsRefresh = async () => {
    try {
      const tokens = await getTokens()
      if (!tokens) {
        throw new Error('unknown tokens error')
      }
      const { data } = await axios.post<SessionsRefreshResult>(
        sessionsRefreshUrl,
        {
          refresh_token: tokens.refreshToken,
        },
      )
      await success({
        accessToken: data.token,
        refreshToken: data.refresh_token,
      })
    } catch (e) {
      console.log({ e })
      failure()
      onRefreshFailure()
    }
  }

  const waitForTokensUpdate = (): Promise<Boolean> =>
    new Promise((resolve) => {
      queue.push((value: boolean) => resolve(value))
    })

  const onFullfilledRequest = async (
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> => {
    if (isFetching) {
      const isTokenUpdatedSuccess = await waitForTokensUpdate()
      if (!isTokenUpdatedSuccess) {
        return Promise.reject(false)
      }
    }
    let tokens = await getTokens()
    if (!tokens) {
      isFetching = true
      sessionsGuest()
      const isTokenUpdatedSuccess = await waitForTokensUpdate()
      if (!isTokenUpdatedSuccess) {
        return Promise.reject(false)
      }
    }
    tokens = await getTokens()
    if (!tokens) {
      return Promise.reject(false)
    }
    config.headers.Authorization = `Token ${tokens.accessToken}`
    return config
  }

  const onRejectedResponse = async (error: AxiosError) => {
    console.log({ error })
    if (
      error.response?.status === 400 &&
      error.response?.data?.key === 'InvalidAuthToken'
    ) {
      console.log('failure access token')
      failure()
      onAccessFailure()
    }
    if (
      error.response?.status === 400 &&
      error.response?.data?.key === 'AuthTokenExpired'
    ) {
      isFetching = true
      sessionsRefresh()
      const isTokenUpdatedSuccess = await waitForTokensUpdate()
      if (isTokenUpdatedSuccess) return axiosInstance(error.config)
    }
    return Promise.reject(error)
  }

  return {
    onFullfilledRequest,
    onRejectedResponse,
  }
}
