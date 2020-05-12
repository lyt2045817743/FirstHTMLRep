export function toRequest(data){
    var newData={...data};
    var numberDataName=["age","weight","bust","waistline","hips","height"];
    var mineAttr=["lowPrice","highPrice","mineDeal","mineFans","mineFollows","recReason","hasImgStyle"];
    for(var item in data){
        var itemString=item.toString();

        //将数据转换成数值型
        numberDataName.forEach(function(val){
            if(itemString==val){
                newData[item]=Number(data[item]);
            }
        })

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
        //sGrade
        if(itemString=="sGrade"){
            switch(data[item]){
                case "初级":newData.sGrade="0";break;
                case "一级":newData.sGrade="1";break;
                case "二级":newData.sGrade="2";break;
                case "三级":newData.sGrade="3";break;
                case "四级":newData.sGrade="4";break;
                case "五级":newData.sGrade="5";break;
            }
        }
        //cata
        // "0" 求助帖
        // "1" 经验分享帖
        // "2" 搭配帖 
        if(itemString=="cata"){
            if(data[item]=="经验分享"){
                newData.online="1";
            }
            else if(data[item]=="求助帖"){
                newData.online="0";
            }
            else if(data[item]=="搭配帖"){
                newData.online="2";
            }
        }
        //scope
        // "0" 已有衣物搭配
        // "1" 整套搭配
        if(itemString=="scope"){
            if(data[item]=="已有衣物搭配"){
                newData.scope="0";
            }
            else if(data[item]=="整套搭配"){
                newData.scope="1";
            }
        }


        //过滤掉自定义的变量
        for(let i=0;i<mineAttr.length;i++){
            if(itemString==mineAttr[i]){
                delete newData[item];
            }
        }
    }
    return newData;
}

export function fromResponse(data){
    var newData={...data};
    var numberDataName=['age','weight','bust','waistline','hips','height'];
    var bigNum=["deal","fans","follows"];
    for(var item in data){
        var itemString=item.toString();

        //将上万的数值转换为w
        for(let i=0;i<bigNum.length;i++){
            if(itemString==bigNum[i]){
                
                if(itemString=="deal"){
                    if(data[item]/10000>1){
                        newData.mineDeal=(data[item]/10000).toFixed(1)+"w";
                    }
                    else{
                        newData.mineDeal=data[item];
                    }
                }
                if(itemString=="fans"){
                    if(data[item]/10000>1){
                        newData.mineFans=(data[item]/10000).toFixed(1)+"w";
                    }
                    else{
                        newData.mineFans=data[item];
                    }
                }
                if(itemString=="follows"){
                    if(data[item]/10000>1){
                        newData.mineFollows=(data[item]/10000).toFixed(1)+"w";
                    }
                    else{
                        newData.mineFollows=data[item];
                    }
                }
            }
        }


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
        //cata
        // "0" 求助帖
        // "1" 经验分享帖
        // "2" 搭配帖 
        if(itemString=="cata"){
            if(data[item]=="1"){
                newData.cata="经验分享";
            }
            else if(data[item]=="0"){
                newData.cata="求助帖";
            }
            else if(data[item]=="2"){
                newData.cata="搭配帖";
            }
        }
        //scope
        // "0" 已有衣物搭配
        // "1" 整套搭配
        if(itemString=="scope"){
            if(data[item]=="0"){
                newData.scope="已有衣物搭配";
            }
            else if(data[item]=="1"){
                newData.scope="整套搭配";
            }
        }



        //添加新的属性
        if(itemString=="pics"){
            if(data[item]){
                if(data[item].length>0){
                    newData.hasImgStyle="width: 575px;float: left;margin: 0 10px;paddingRight: 0;";
                }
            }
            else{
                newData.hasImgStyle="";
            }
        }
    }

    return newData;
}