import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/web/summary/page',
    method: 'get',
    params: query
  })
}
export function findParentList(query) {
  return request({
    url: '/web/summary/page',
    method: 'get',
    params: query
  })
}
export function addObj(obj) {
  return request({
    url: '/web/summary',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/web/summary/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/web/summary/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/web/summary',
    method: 'put',
    data: obj
  })
}
