// 优先队列（最大优先，最小优先）
function PriorityQueue(){
    var items=[];
    function QueueEl(element,priority){
        this.element=element;
        this.priority=priority;
    }
    this.enqueue=function(element,priority){
        //将该元素和其权重封装起来
        var newEl=new QueueEl(element,priority);

        //将该元素插入到数组中相应的位置
        if(items.length==0){//如果数组中没有元素，直接插入就好
            items.push(newEl);
        }
        else{//否则，将找到正确的位置插入该元素
            var hasAdd=false;
            for(let i=0;i<items.length;i++){
                if(items[i].priority>newEl.priority){
                    items.splice(i,0,newEl);
                    hasAdd=true;
                    break;
                }
            }
            if(!hasAdd){
                items.push(newEl);
            }
        }
    }
    this.dequeue=function(){
        return items.shift();
    }
    this.front=function(){
        return items[0];
    }
    this.isEmpty=function(){
        return items.length==0;
    }
    this.size=function(){
        return items.length;
    }
    this.print=function(){
        items.forEach((val)=>{
            console.log(val);
        })
    }
}