import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/web/connect/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/web/connect',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/web/connect/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/web/connect/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/web/connect',
    method: 'put',
    data: obj
  })
}
