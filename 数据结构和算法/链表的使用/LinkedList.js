function LinkedList(){
    function Node(element,next){
        this.element=element;
        this.next=next;
    }
    var length=0;
    var head=null;
    this.append=function(element){
        var newNode=new Node(element,null);
        if(!head){
            head=newNode;
        }
        else{
            var current=head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
        length++;
    }
    this.insert=function(position,element){
        var newNode=new Node(element,position.next);
        position.next=newNode;
        length++;
    }
    this.remove=function(element){
        var nowNode=head;
        while(nowNode.next){
            if(nowNode.next.element==element){
                nowNode.next=nowNode.next.next;
                length--;
                break;
            }else{
                nowNode=nowNode.next;
            }
        }
    }
    this.indexOf=function(){

    }
    this.removeAt=function(position){

    }
    this.size=function(){
        return length;
    }
    this.toString=function(){
        console.log(head);
    }
}