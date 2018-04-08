import { request, config } from '../utils'

const { api } = config
const { user, userInfo, userPassword } = api

export async function query () {
  return request({
    url: userInfo,
    method: 'get',
  })
}

export async function update (params) {
  return request({
    url: user,
    method: 'PATCH',
    data: params,
  })
}

export async function password (params) {
  return request({
    url: userPassword,
    method: 'PATCH',
    data: params,
  })
}
