export function stylistRec(user,stylist){
    let returnData={...stylist};
    returnData.recReason="平台推荐";

    //成交量
    if(stylist.deal){
        if(Number(stylist.deal)>300){
            returnData.recReason="成交量多";
        }
    }

    //搭配师等级
    if(stylist.styliLevel){
        if(Number(stylist.styliLevel)>=4){
            returnData.recReason="搭配师等级认证高"
        }
    }

    //评分高
    if(stylist.mark){
        if(stylist.mark>=4.5){
            returnData.recReason="客户评分高";
        }
    }

    //粉丝量
    if(stylist.fans){
        if(Number(stylist.fans)>10000){
            returnData.recReason="很受欢迎";
        }
    }

    //职业关系
    if(user.job&&stylist.job){
        if(user.job==stylist.job){
            returnData.recReason="与您职业相近";
        }
    }

    //年龄是否相仿
    if(user.age&&stylist.age){
        let ageDiff=Math.abs(Number(user.age)-Number(stylist.age));
        if(ageDiff<=2){
            returnData.recReason="年龄相仿";
        }
    }

    return returnData;
}

export function goodsRec(goodsInfo){
    let returnData={...goodsInfo};
    returnData.recReason="平台推荐";
    //销量
    if(goodsInfo.goodsSales){
        if(goodsInfo.goodsSales>=400){
            returnData.recReason="销量高";
        }
    }

    //假的数据 --为了展示效果  后期删掉
    if(goodsInfo.goodsPrice=="580"||goodsInfo.goodsPrice=="110"){
        returnData.recReason="猜你喜欢";
    }
    return returnData;
}