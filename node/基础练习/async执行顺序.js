async function test1(){
    console.log(1);
    await test2();
    console.log(2);
}

async function test2(){
    console.log(3);
    let result = await test3();
    console.log(4);
    console.log(result);
}

function test3(){
    return new Promise((res, rej) => {
        console.log(6);
        res(5)
    })
}

test1(); // 1 3 6 4 5 2