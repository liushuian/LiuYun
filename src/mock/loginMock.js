import Mock from 'mockjs'
import './layoutMock'

Mock.setup({
  timeout: '200-600'
})
// 验证码
Mock.mock('/api/captchaImage', 'get', {
  "img": require("@/assets/images/login_code.gif"),
  "uuid": 10,
  "code": 200
})

// 登录
Mock.mock('/api/login', 'post', {
  "token": "an123456789",
  "code": 200
})