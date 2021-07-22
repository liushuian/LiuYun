import request from '@/utils/request'

// 导航菜单
export function asidebar() {
  return request({
    url: '/sidebar',
    method: 'get'
  })
}

