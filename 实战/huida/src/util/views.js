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