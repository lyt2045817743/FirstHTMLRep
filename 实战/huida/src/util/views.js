export function initPath(nowPath){
    let pathSetting={};
    if(nowPath=="/personal/settings"){
        pathSetting.index="7";
    }
    else if(nowPath=="/personal"){
        pathSetting.index="1";
    }
    else if(nowPath=="/personal/trainingCenter"){
        pathSetting.index="6";
    }
    else if(nowPath=="/personal/myPoints"){
        pathSetting.index="5";
    }
    else if(nowPath=="/personal/consultOrder"){
        pathSetting.index="4";
    }
    else if(nowPath=="/personal/goodsOrder"){
        pathSetting.index="3";
    }
    else if(nowPath=="/personal/myFollowings"){
        pathSetting.index="2";
    }
    return pathSetting;
}