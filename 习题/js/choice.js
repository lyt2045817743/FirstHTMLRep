var bq=document.getElementsByTagName('blockquote');
for(var j=0;j<bq.length;j++){
    var text=bq[j].textContent;
    var choiceArr=[];
    var htmlStr="";
    while(text.length>0){
        var index=text.lastIndexOf("\n");
        // console.log(index);
        choiceArr.unshift(text.substr(index,text.length));
        text=text.substr(0,index);
        // console.log(choiceArr);
    }
    
    for(var i=0;i<choiceArr.length-1;i++){
        htmlStr+=`<p>${choiceArr[i]}</p>`;
    }
    console.log(htmlStr);
    
    bq[j].firstChild.nodeValue=htmlStr;
}