import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/web/production/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/web/production',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/web/production/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/web/production/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/web/production',
    method: 'put',
    data: obj
  })
}
