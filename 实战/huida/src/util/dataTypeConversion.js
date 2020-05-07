export function toRequest(data){
    var newData={...data};
    var numberDataName=["age","weight","bust","waistline","hips","height"];
    for(var item in data){
        var itemString=item.toString();

        //将数据转换成数值型
        numberDataName.forEach(function(val){
            if(itemString==val){
                newData[item]=Number(data[item]);
            }
        })
        //??????存疑
        // if((itemString in numberDataName)){
        // }

        //将数据转换为其相应代号
        //sex
        if(itemString=='sex'){
            if(data[item]=='男'){
                newData.sex='0';
            }
            else if(data[item]=='女'){
                newData.sex='1';
            }
            else{
                newData.sex=null;
            }
        }
        //role
        if(itemString=='role'){
            if(data[item]=='搭配师'){
                newData.role=1;
            }
            else if(data[item]=='顾客'){
                newData.role=0;
            }
        }
        //lowPrice
        if(itemString=="lowPrice"){
            newData.priceEpt[0]=Number(data[item]);
        }
        if(itemString=="highPrice"){
            newData.priceEpt[1]=Number(data[item]);
        }
        //fullTime
        if(itemString=="fullTime"){
            if(data[item]=="全职搭配师"){
                newData.fullTime="1";
            }
            else if(data[item]=="大众搭配师"){
                newData.fullTime="0";
            }
        }
        //styliLevel
        if(itemString=="styliLevel"){
            switch(data[item]){
                case "初级":newData.styliLevel="0";break;
                case "一级":newData.styliLevel="1";break;
                case "二级":newData.styliLevel="2";break;
                case "三级":newData.styliLevel="3";break;
                case "四级":newData.styliLevel="4";break;
                case "五级":newData.styliLevel="5";break;
            }
        }
        //online
        if(itemString=="online"){
            if(data[item]=="在线"){
                newData.online="1";
            }
            else if(data[item]=="休息中"){
                newData.online="0";
            }
            else if(data[item]=="可预约"){
                newData.online="2";
            }
        }

    }
    return newData;
}

export function fromResponse(data){
    var newData={...data};
    var numberDataName=['age','weight','bust','waistline','hips','height'];
    for(var item in data){
        var itemString=item.toString();

        //将数据转换成字符串
        numberDataName.forEach(function(val){
            if(itemString==val){
                newData[item]=data[item].toString();
            }
        })
        
        //将相应代号转换为文字
        //sex
        if(itemString=='sex'){
            if(data[item]=='0'){
                newData.sex='男';
            }
            else if(data[item]=='1'){
                newData.sex='女';
            }
            else{
                newData.sex='男';
            }
        }
        //role
        if(itemString=='role'){
            if(data[item]=='1'){
                newData.role='搭配师';
            }
            else if(data[item]=='0'){
                newData.role='顾客';
            }
        }

        //priceEpt
        if(itemString=="priceEpt"){
            newData.lowPrice=data[item][0].toString();
            newData.highPrice=data[item][1].toString();
        }

        //fullTime
        if(itemString=="fullTime"){
            if(data[item]=="1"){
                newData.fullTime="全职搭配师";
            }
            else if(data[item]=="0"&&data.styliLevel=="0"){
                newData.fullTime="大众搭配师";
            }
            else if(data[item]=="0"&&data.styliLevel!="0"){
                newData.fullTime="兼职搭配师";
            }
        }

        //styliLevel
        if(itemString=="styliLevel"){
            switch(data[item]){
                case "0":newData.styliLevel="未评级";break;
                case "1":newData.styliLevel="一级搭配师";break;
                case "2":newData.styliLevel="二级搭配师";break;
                case "3":newData.styliLevel="三级搭配师";break;
                case "4":newData.styliLevel="四级搭配师";break;
                case "5":newData.styliLevel="五级搭配师";break;
            }
        }
        //featTags
        if((itemString=="featTags")&&(!data[item])){
            newData.featTags= [
                {
                    id: 0,
                    tag: "暂无",
                }
            ];
        }
        //styTags
        if(itemString=="styTags"&&(!data[item])){
            newData.styTags=[
                {
                    id: 0,
                    tag: "暂无",
                }
            ];
        }
        //occaTags
        if(itemString=="occaTags"&&(!data[item])){
            newData.occaTags=[
                {
                    id: 0,
                    tag: "暂无",
                }
            ];
        }
        //specSty
        if((itemString=="specSty")&&(!data[item])){
            newData.specSty= [
                {
                    id: 0,
                    tag: "暂无",
                }
            ];
        }
        //specOcc
        if((itemString=="specOcc")&&(!data[item])){
            newData.specOcc= [
                {
                    id: 0,
                    tag: "暂无",
                }
            ];
        }
        //online
        if(itemString=="online"){
            if(data[item]=="1"){
                newData.online="在线";
            }
            else if(data[item]=="0"){
                newData.online="休息中";
            }
            else if(data[item]=="2"){
                newData.online="可预约";
            }
        }
    }
    return newData;
}