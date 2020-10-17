// es6写法
class Tree{
    constructor(key){
        this.key=key;
        this.left=undefined;
        this.right=undefined;
    }
}

class BirTree{
    constructor(arr){
        this.root=undefined;
        arr.forEach((item)=>{
            this.insert(item);
        })
    }

    insert(key){
        if(!this.root){
            this.root=new Tree(key);
        }
        else{
            this.compareKey(this.root,key);
        }
    }

    compareKey(node,key){
        
    }
}

let bt=new BirTree([6,2,5,4,8,7]);
