<!-- 商城页 -->
<template>
    <div class="container clearfix">
        <div class="goods-list">
            <div class="sl-nav clearfix">
                <Menu mode="horizontal" :active-name="activeName" @on-select="changePath" class="menu">
                    <MenuItem name="1" to="/store">
                        全部
                    </MenuItem>
                    <MenuItem name="2" to="/store/lady">
                        女装
                    </MenuItem>
                    <MenuItem name="3" to="/store/man">
                        男装
                    </MenuItem>
                    <MenuItem name="4" to="/store/acce">
                        饰品
                    </MenuItem>
                    <MenuItem name="5" to="/store/shooes-bags">
                        鞋包
                    </MenuItem>
                    <MenuItem name="6" to="/store/loan">
                        租借专柜
                    </MenuItem>
                </Menu>
                <Input search enter-button placeholder="输入你想搜索的宝贝" class="search-input"/>
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="stylist-banner">
            <div class="banner">
                <div class="banner-title clearfix">
                    <span class="bt-font">
                        <Icon type="ios-bookmark" />
                        优质搭配师推荐
                    </span>
                    <span class="bt-btn">
                        换一换
                        <Icon type="md-sync" />
                    </span>
                </div>
                <div class="banner-content">
                    <div class="bc-item clearfix" v-for="item in stylistList" :key="item.id">
                        <div class="bci-left clearfix">
                            <img :src="item.headPic" alt="">
                            <div class="bl-info">
                                <span class="bl-nickname">{{item.nickname}}</span><br/>
                                <span class="bl-recommend-reason">{{item.recReason}}</span>
                            </div>
                        </div>
                        <div class="bci-right">
                            +关注
                        </div>
                    </div>
                </div>
                <div class="showMore-btn">
                    更多搭配师
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Menu,MenuItem,Icon,Input} from 'view-design';
import {fromResponse} from '../../util/dataTypeConversion';
import  {stylistRec} from '../../util/dataAnalyze';
export default {
    components:{
        Menu,MenuItem,Icon,Input
    },
data() {
return {
    activeName:this.$store.state.pathSet.parentIndex,
    stylistList: [
        {
            id: 6,
            age:20,
            uid: "ea1127b4-370a-4786-830a-51dfee89486c",
            nickname: "小鱼干快跑",
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
            online: "在线",
            recReason:"年龄相仿"
        },
    ],
}
},
methods: {
    initData(){

        //axios请求全部搭配师列表
        let url="/api/user/styliInfo/"+1+"/"+7;
        let _this=this;
        this.axios.get(url).then(function(res){
                console.log(res.data);
                if(res.data.flag==true){
                    let newData=[];
                    let data=res.data.data.list;
                    for(let i=0;i<data.length;i++){
                        newData.push(stylistRec(_this.$store.state.user,fromResponse(data[i])));
                    }
                    _this.stylistList=newData;
                    console.log(_this.stylistList);
                    
                }
                else{
                    console.log(res.data.message);
                    console.log(url);
                }
        })
    },
    changePath(name){
        let pathSet={...this.$store.state.pathSet};
        pathSet.parentIndex=name;
        this.$store.commit("setPathSet",pathSet);
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.initData();
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods-list{
    width: 750px;
    height: 440px;
    float: left;
}
.sl-nav{
    height: 61px;
    border-bottom: 2px solid #dcdee2;
}
.menu{
    width: 450px;
    float: left;
}
.search-input{
    width: 300px;
    float: right;
    margin-top: 15px;
}
.stylist-banner{
    width: 230px;
    height: 440px;
    /* background-color: antiquewhite; */
    float: right;
}
.banner{
    height: 490px;
    margin-top: 20px;
    border: 0.5px solid #007a8a;
}
.banner-title{
    width:100%;
    height:50px;
    line-height: 50px;
    padding: 0 10px;
    /* background-color: aqua; */
}
.bt-font{
    font-size: 15px;
    font-weight: bold;
    float: left;
}
.bt-btn{
    float: right;
}

.bc-item{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 15px;
}
.bci-left{
    float: left;
}
.bci-left img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
}
.bl-info{
    float: left;
    margin-left: 5px;
    text-align: left;
}
.bl-nickname{
    font-size: 14px;
    color: #007a8a;
}
.bl-recommend-reason{
    font-size: 12px;
    color: #333;
}
.bci-right{
    width: 60px;
    height: 30px;
    line-height: 30px;
    color: white;
    background-color: #007a8a;
    margin-top: 5px;
    float:right;
}
.showMore-btn{
    height: 40px;
    line-height: 40px;
    margin: 20px 10px 0;
    background-color: #E5EDEF;
    color: #666;
    cursor: pointer;
}
</style>