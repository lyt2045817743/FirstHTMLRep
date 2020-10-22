// 实现instanceof 判断A是否为B的实例
function myInstanceof(A,B){
    let p = A;
    while(p){
        if(p.__proto__ === B.prototype){
            return true;
        }
        p = p.__proto__;
    }
    return false;
}
myInstanceof([],Array);
