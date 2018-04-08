module.exports = [
  {
    id: 1,
    icon: 'laptop',
    name: '仪表盘',
    router: '/dashboard',
  },
  {
    id: 2,
    bpid: 1,
    name: '用户管理',
    icon: 'user',
    router: '/user',
  },
  {
    id: 21,
    mpid: -1,
    bpid: 2,
    name: '用户详情',
    router: '/user/:id',
  },
  {
    id: 3,
    bpid: 1,
    name: '角色管理',
    icon: 'user',
    router: '/role',
  },
  {
    id: 4,
    bpid: 1,
    name: '权限管理',
    icon: 'user',
    router: '/permission',
  },
  {
    id: 5,
    bpid: 1,
    name: '请求测试',
    icon: 'api',
    router: '/request',
  },
]
