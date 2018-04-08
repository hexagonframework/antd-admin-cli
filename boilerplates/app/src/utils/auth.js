import { getCookie, delCookie } from './helper'

// Auth
export function getAuthHeader (ssoToken) {
  return ({
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${ssoToken}`,
      'Content-Type': 'application/json',
    },
  })
}

export function redirectLogin () {
  localStorage.clear()
  window.location.href = '/login'
}

export function authenticated () {
  const ssoToken = getCookie('sso_token')
  if (!ssoToken) {
    redirectLogin()
  }
}

export function logOut () {
  delCookie({
    name: 'sso_token',
    path: '/',
    domain: '.corp.visiondk.com',
  })
  authenticated()
}
