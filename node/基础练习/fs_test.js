const fs = require('fs');
const path = require('path');
const txtDir = path.resolve(__dirname, 'fs_test.txt');

// // 异步写入
// fs.writeFile(txtDir, '今天周五啦', (err)=>{
//     if(err) throw(err);
//     console.log('文件内容已成功写入');
// })

// // 同步写入
// fs.writeFileSync(txtDir, '明天去唱歌！');
// console.log('赶紧去看看！');


// 异步读取
fs.readFile(txtDir, 'utf8', (err, data)=>{
    if(err) throw(err);
    console.log(data);
})
console.log(123);

// 同步读取
// const data = fs.readFileSync(txtDir,'utf8');
// console.log(data);
// console.log(456);

