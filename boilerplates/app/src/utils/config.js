const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: '管理后台',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin CLI  © 2017 HexagonFramework',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/user/me`,
    userPassword: `${APIV1}/user/password`,
    users: `${APIV1}/user`,
    user: `${APIV1}/user/:id`,
    permissions: `${APIV1}/permission`,
    permission: `${APIV1}/permission/:id`,
    roles: `${APIV1}/role`,
    role: `${APIV1}/role/:id`,
    grantPermissions: `${APIV1}/role/:id/grant`,
    grantRoles: `${APIV1}/user/:id/grant`,
    denyRoles: `${APIV1}/user/:id/deny`,
    dashboard: `${APIV1}/dashboard`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
