export function initPath(nowPath){
    let pathSetting={};
    let pathArr=nowPath.split('/');
    let mainIndex=pathArr[1];
    let lastPath=pathArr[pathArr.length-1];
    console.log(mainIndex);
    switch(mainIndex){
        case "home":pathSetting.mainIndex="1";console.log(111);break;
        case "consult":pathSetting.mainIndex="2";break;
        case "store":pathSetting.mainIndex="3";break;
        case "forum":pathSetting.mainIndex="4";break;
        case "personal":pathSetting.mainIndex="";break;
    }

    switch(lastPath){
        case "personal":pathSetting.parentIndex="1";break;
        case "myFollowings":pathSetting.parentIndex="2";break;
        case "goodsOrder":pathSetting.parentIndex="3";break;
        case "consultOrder":pathSetting.parentIndex="4";break;
        case "myPoints":pathSetting.parentIndex="5";break;
        case "trainingCenter":pathSetting.parentIndex="6";break;
        //个人中心-基本资料
        case "settings":pathSetting.childIndex="1";pathSetting.parentIndex="7";break;
        case 'sizeInfo':pathSetting.childIndex="1";pathSetting.parentIndex="7";break;
        case 'showPanel':pathSetting.childIndex="2";pathSetting.parentIndex="7";break;
        case 'personalInfo':pathSetting.childIndex="3";pathSetting.parentIndex="7";break;
        case 'account':pathSetting.childIndex="4";pathSetting.parentIndex="7";break;
    }

    return pathSetting;
}

export function pathName(pathSetObj){
    let pathNameObj={};
    let pathNameStr=""
    if(pathSetObj){
        //mainName
        switch(pathSetObj.mainIndex){
            case "1":case "":pathNameObj.mainName="/home";break;
            case "2":pathNameObj.mainName="/consult";break;
            case "3":pathNameObj.mainName="/store";break;
            case "4":pathNameObj.mainName="/forum";break;
        }
        //parentName
        if(pathSetObj.mainIndex=="2"){
            switch(pathSetObj.parentIndex){
                case "1":case "":pathNameObj.parentName="";break;
                case "2":pathNameObj.parentName="/classify";break;
                case "3":pathNameObj.parentName="/following";break;
            }
        }
        if(pathSetObj.mainIndex=="3"){
            switch(pathSetObj.parentIndex){
                case "1":case "":pathNameObj.parentName="";break;
                case "2":pathNameObj.parentName="/lady";break;
                case "3":pathNameObj.parentName="/man";break;
                case "4":pathNameObj.parentName="/acce";break;
                case "5":pathNameObj.parentName="/shooes-bags";break;
                case "6":pathNameObj.parentName="/loan";break;
            }
        }
        if(pathSetObj.mainIndex=="4"){
            switch(pathSetObj.parentIndex){
                case "1":case "":pathNameObj.parentName="";break;
                case "2":pathNameObj.parentName="/newest";break;
                case "3":pathNameObj.parentName="/following";break;
            }
        }

        //确定pathNameStr
        pathNameStr=pathNameObj.mainName+pathNameObj.parentName;
    }
    else{
        pathNameStr="/home";
    }
    
    return pathNameStr;
}