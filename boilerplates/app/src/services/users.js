import { request, config } from '../utils'

const { api } = config
const { users, user, grantRoles, denyRoles } = api

export async function query (params) {
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}

export async function batchRemove (params) {
  return request({
    url: users,
    method: 'delete',
    data: params,
  })
}

export async function batchUpdate (params) {
  return request({
    url: users,
    method: 'PATCH',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: users,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: user,
    method: 'delete',
    data: params,
  })
}

export async function deny (params) {
  return request({
    url: denyRoles,
    method: 'post',
    data: params,
  })
}

export async function grant (params) {
  return request({
    url: grantRoles,
    method: 'post',
    data: params,
  })
}
