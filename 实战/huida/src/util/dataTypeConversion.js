export function toRequest(data){
    var newData={...data};
    var numberDataName=["age","weight","bust","waistline","hips","height"];
    var codeName=["sex","role","isStylist","lowPrice","highPrice"];
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
        codeName.forEach(function(val){
            if(itemString==val){
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
            }
        })

    }
    console.log(newData);
    
    return newData;
}
export function fromResponse(data){
    var newData={...data};
    var numberDataName=['age','weight','bust','waistline','hips','height'];
    var codeName=['sex','role','isStylist'];
    for(var item in data){
        var itemString=item.toString();

        //将数据转换成字符串
        numberDataName.forEach(function(val){
            if(itemString==val){
                newData[item]=data[item].toString();
            }
        })
        
        //将相应代号转换为文字
        codeName.forEach(function(val){
            if(itemString==val){
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
                    newData.highPrice=data[item][0].toString();
                }
            }
        })
    }
    return newData;
}