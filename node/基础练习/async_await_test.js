const request = require('request')
async function syncFun(){
    // const data = await getData();
     try {
        const data = await timer();
        console.log(data);
        console.log(123);
     } catch (error) {
         console.log(error);
     }
}

function getData() {
    return new Promise((resolve, reject) => {
        const url = "https://www.baidu.com"
        request(url, (err, res, body) => {
            if(err) reject(err);
            else resolve(body);
        })
    })
}

function timer(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve('倒计时结束')
            // reject('出错了！！')
        }, 1000)
    })
}

syncFun()