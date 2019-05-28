import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/web/feedback/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/web/feedback',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/web/feedback/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/web/feedback/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/web/feedback',
    method: 'put',
    data: obj
  })
}
