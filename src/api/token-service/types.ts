export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface SessionsGuestResult {
  refresh_token: string;
  token: string;
}

export interface SessionsRefreshResult {
  refresh_token: string;
  token: string;
}

export interface SessionsGuestRequest {
  appVersion: string;
  brandName: string;
  lang: string;
  model: string;
  osVersion: string;
  platform: string;
  screenResolution: string;
  udid: string;
  expireAccessTokenTime?: number;
  expireRefreshTokenTime?: number;
}
