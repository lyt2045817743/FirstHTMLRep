const qs = require('querystring');

// const params = qs.stringify({
//     name:'xiaoming',
//     age: 19
// })

// const url = "https://www.baidu.com?" + params;
// console.log(url);

function urlSplice(url, params) {
    // console.log(params);
    return url + qs.stringify(params);
}

module.exports = urlSplice;
