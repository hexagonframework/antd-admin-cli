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
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
