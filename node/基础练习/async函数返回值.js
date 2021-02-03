async function test() {
    return 'hello'
}

let result = test();
console.log(result); // async函数返回的是一个promise对象

result.then((res)=>{
    console.log(res);
})