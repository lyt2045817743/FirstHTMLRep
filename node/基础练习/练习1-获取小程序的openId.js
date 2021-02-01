const http = require('./简单封装的第三方request');
const urlSplice = require('./qs_test');

const params = {
    appid: 'wxbdd7dc7b02074d83', // 在开发者工具中获取
    secret: '355b683703850ee39a54ec2f50ea0ff1', // 在开发者工具中获取
    js_code: '003YV2ml2m9Nq64tYsml2bmlWa4YV2mx', // 需要使用微信小程序的wx.login()来获取 每个code只能使用一次
    grant_type: 'authorization_code'
};

// 获取带参的url
const url = urlSplice('https://api.weixin.qq.com/sns/jscode2session?', params);

http(url);