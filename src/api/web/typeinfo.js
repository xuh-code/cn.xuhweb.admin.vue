import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/web/typeinfo/page',
    method: 'get',
    params: query
  })
}

export function typeList(query) {
  return request({
    url: '/web/typeinfo/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/web/typeinfo',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/web/typeinfo/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/web/typeinfo/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/web/typeinfo',
    method: 'put',
    data: obj
  })
}
