import { request, config } from '../utils'

const { api } = config
const { roles, role, grantPermissions } = api

export async function query (params) {
  return request({
    url: roles,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: roles,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: role,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: role,
    method: 'PATCH',
    data: params,
  })
}

export async function grant (params) {
  return request({
    url: grantPermissions,
    method: 'post',
    data: params,
  })
}
