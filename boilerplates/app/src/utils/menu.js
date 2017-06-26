module.exports = [
  {
    id: 1,
    icon: 'laptop',
    name: 'Dashboard',
    router: '/dashboard',
  },
  {
    id: 2,
    bpid: 1,
    name: 'Users',
    icon: 'user',
    router: '/user',
  },
  {
    id: 21,
    mpid: -1,
    bpid: 2,
    name: 'User Detail',
    router: '/user/:id',
  },
  {
    id: 3,
    bpid: 1,
    name: 'Request',
    icon: 'api',
    router: '/request',
  },
]
