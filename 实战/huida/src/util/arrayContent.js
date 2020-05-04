export function toNumber(strArr,model){
    let returnData=[];
    for(let i=0;i<strArr.length;i++){
        for(let j=0;j<model.length;j++){
            if(strArr[i]==model[j].tag){
                returnData.push(model[j].id);
            }
        }
    }
    return returnData;
}

export function toStr(objArr){
    let returnData=[];
    for(let i=0;i<objArr.length;i++){
        returnData.push(objArr[i].tag);
    }
    return returnData;
}

export function toObj(numArr,model){
    let returnData=[];
    for(let i=0;i<numArr.length;i++){
        for(let j=0;j<model.length;j++){
            if(numArr[i]==model[j].id){
                returnData.push(model[j]);
            }
        }
    }
    return returnData;
}