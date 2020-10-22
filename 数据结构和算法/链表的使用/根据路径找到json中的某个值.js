const json = {
    a: {
        b: {
            c: 1,
            d: 2
        }
    },
    e: {
        f: 3,
    }
}

const path = ['a', 'b', 'c'];
let p = json;
path.forEach((item)=>{
    p = p[item];
})
console.log(p);
