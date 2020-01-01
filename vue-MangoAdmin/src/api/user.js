import request,{post,get} from '@/utils/request'

//登录======
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
//退出=======
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}


