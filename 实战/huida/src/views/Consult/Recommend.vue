<!-- 咨询--推荐页 -->
<template>
    <div>
        <div class="stylist-list">
                <Card class="sl-item" v-for="item in stylistList" :key="item.id" :padding="0" style="width:250px">
                    <div style="text-align:left">
                        <div class="info-header">
                            <div class="ih-item clearfix">
                                <div class="left">
                                    <img :src="item.headPic" alt="">
                                </div>
                                <div class="right">
                                    <span style="fontSize:20px;color:#007a8a">{{item.nickname}}</span><br/>
                                    <Icon v-if="item.sex=='女'" style="marginRight:20px;color:pink;fontWeight:bold" type="ios-female" />
                                    <Icon v-if="item.sex=='男'" style="marginRight:20px;color:blue;fontWeight:bold" type="ios-male" />
                                    <span>{{item.age}}</span><br/>
                                    <Icon type="md-wine" style="color:#007a8a"/>
                                    <span style="position:relative;color:#007a8a">{{item.styliLevel}}搭配师</span>
                                </div>
                            </div>
                            <div class="ih-item center clearfix">
                                <div class="left">
                                    <span>粉丝</span><br/>
                                    <span class="info">{{item.mineFans}}</span>
                                </div>
                                <div style="width:1px;height:31px;marginTop:5px;float:left;marginLeft: 13px;borderRight:[0.5px,solid,#999]"></div>
                                <div class="right">
                                    <span>成交量</span><br/>
                                    <span class="info">{{item.mineDeal}}</span>
                                </div>
                            </div>
                            <div class="ih-item center clearfix">
                                    <span style=";marginRight:20px">客户评分：</span>
                                     <Rate allow-half disabled v-model="item.mark" style="font-size:15px;letterSpacing:-5px"/>
                            </div>
                            <div class="center clearfix">
                                <div class="left">
                                    <span style="fontSize:20px;color:#007a8a">{{item.servicePrice[0]}}￥-{{item.servicePrice[1]}}￥</span>
                                </div>
                                <div class="right">
                                    <a href="javascript:void(0)">个人资料 ></a>
                                </div>
                            </div>
                        </div>
                        <div class="info-footer">
                            <p style="fontSize:12px">
                                “{{item.signature}}{{item.signature}}{{item.signature}}”
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
    </div>
</template>

<script>
import {Rate,Card,Icon} from 'view-design';
export default {
    components:{
        Rate,Card,Icon
    },
data() {
return {
    stylistList: [
        {
            id: 6,
            age:20,
            uid: "ea1127b4-370a-4786-830a-51dfee89486c",
            nickname: "f",
            sex: "女",
            headPic: "http://101.200.80.171:8080/group1/M00/00/00/rBGIsF6kIS-AZ7fPAAjKKUcGWwc544.jpg",
            fans: 3456234,
            mineFans:"1345.6w",
            signature: "什么也没留下。",
            styliLevel: "三级",
            deal: 500,
            mineDeal:"5000.0w",
            mark: 4.5,
            servicePrice:
            [
                    10,
                    20.5
            ],
            online: "在线"
        },
    ],
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.ih-item{
    margin-bottom: 10px;
}
.info-header{
    padding: 10px;
    background-color: #E5EDEF;
}
.left{
    width: 100px;
    float:left;
}
.left img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-top: 3px;
    border-radius: 50%;
}
.right{
    width: 109px;
    float: right;
}
.center{
    text-align: center;
}
.info{
    color: #999;
}
.info-footer{
    padding: 10px;
    /* height: 50px; */
}
</style>