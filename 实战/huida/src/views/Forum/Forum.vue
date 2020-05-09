<!-- 论坛页 -->
<template>
    <div class="container clearfix">
        <div class="post-list">
            <div class="menu clearfix">
                <Menu mode="horizontal" class="menu-box">
                    <MenuItem name="1" to="/forum/recommend">
                        推荐
                    </MenuItem>
                    <MenuItem name="2" to="/forum/newest">
                        最新
                    </MenuItem>
                    <MenuItem name="3" to="/forum/following">
                        关注
                    </MenuItem>
                </Menu>
                <div class="write-btn">
                    <Icon type="ios-create-outline" />
                    去发帖
                </div>
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="goods-banner">
            <div class="banner">
                <div class="banner-title clearfix">
                    <span class="bt-font">
                        <Icon type="ios-bookmark" />
                        最热商品推荐
                    </span>
                    <span class="bt-btn">
                        换一换
                        <Icon type="md-sync" />
                    </span>
                </div>
                <div class="banner-content">
                    <div class="bc-item" v-for="item in goodsList" :key="item.id">
                        <div class="bci-img">
                            <img :src="item.goodsPic" alt="">
                        </div>
                        <div class="bci-info">
                            <span class="rec-reason">{{item.recReason}}</span>
                        </div>
                    </div>
                </div>
                <div class="showMore-btn">
                    更多商品信息
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Menu,MenuItem,Icon} from 'view-design';
import { goodsRec } from '../../util/dataAnalyze';
export default {
    components:{
        Menu,MenuItem,Icon
    },
data() {
return {
    goodsList:[
        {
            id:1,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t26734/297/4149446/275302/8649bb1c/5b7fd884Na481d5d6.jpg!q70.jpg.webp",
            goodsTitle:"古田森 高腰牛仔小脚裤2018秋季女装显瘦弹力长裤女裤子修身韩版铅笔裤1595 蓝色",
            goodsPrice:"110",
            goodsSales:"230",
        },
        {
            id:2,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t22396/114/2516807590/317678/5f0784bd/5b62db7cNd77ea606.jpg!q70.jpg.webp",
            goodsTitle:"A21 2018秋季新品女装百搭牛仔裤弹力修身中腰窄脚潮女长裤",
            goodsPrice:"128",
            goodsSales:"200",
        },
        {
            id:3,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t1/4829/13/6136/141462/5ba22020E80dd06dc/480074495de24ff4.jpg!q70.jpg.webp",
            goodsTitle:"逸阳ESEY 2018秋冬季新款牛仔直筒裤女高腰宽松简约通勤显瘦九分阔腿裤女装牛仔裤女裤子",
            goodsPrice:"105",
            goodsSales:"90",
        },
        {
            id:4,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t25039/99/218969705/118744/5c56ca30/5b69538fN0de73473.jpg!q70.jpg.webp",
            goodsTitle:"Skechers斯凯奇D'lites休闲鞋男女鞋 复古拼接熊猫鞋",
            goodsPrice:"390",
            goodsSales:"1002",
        },
        {
            id:5,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t1/21962/14/3540/237519/5c289725Ee84c530d/b7165ba1d457dba2.jpg!q70.jpg.webp",
            goodsTitle:"回力 棉鞋雪地靴女鞋子小白鞋女男波板鞋女百搭简约单鞋帆布休闲鞋女",
            goodsPrice:"120",
            goodsSales:"580",
        },
        {
            id:6,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t3286/74/2122097636/272129/568b9096/57d91b0eNcb59520e.jpg!q70.jpg.webp",
            goodsTitle:"金狐狸（FOXER）新款女包大容量实用通勤手提女士包包头层牛皮时尚单肩包女",
            goodsPrice:"580",
            goodsSales:"200",
        },
        {
            id:7,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t3805/293/2834675894/148276/de4ec46b/586b1afbN136b311c.jpg!q70.jpg.webp",
            goodsTitle:"森马senma2018秋季新品女鞋韩版花朵平底低帮单鞋系带女板鞋",
            goodsPrice:"298",
            goodsSales:"409",
        },
        {
            id:9,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t1/10586/36/5308/151223/5c14cbefEcb851de3/4ce5ce49ce9b92ed.jpg!q70.jpg.webp",
            goodsTitle:"稻草人（MEXICAN）女包牛皮单肩斜跨女包时尚百搭小包斜挎包女士包包新款贝壳包休闲迷你包",
            goodsPrice:"480",
            goodsSales:"230",
        },
    ]
}
},
methods: {
    initData(){
        for(let i=0;i<this.goodsList.length;i++){
            this.goodsList[i]={...goodsRec(this.goodsList[i])};
        }
        console.log(this.goodsList);
        
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
.post-list{
    width: 750px;
    height: 440px;
    float: left;
}
.goods-banner{
    width: 230px;
    height: 440px;
    /* background-color: antiquewhite; */
    float: right;
}
.banner{
    height: 620px;
    margin-top: 20px;
    border: 0.5px solid #007a8a;
}
.menu{
    height: 61px;
    border-bottom: 2px solid #dcdee2;
}
.menu-box{
    /* width: 450px; */
    float: left;
}
.write-btn{
    width: 80px;
    height: 30px;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    line-height: 30px;
    color: white;
    border-radius: 50px;
    background-color: #007a8a;
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
    width: 100px;
    margin-bottom: 5px;
    display: inline-block;
}
.bc-item:nth-child(2n+1){
    margin-right:5px;
}
.bci-img img{
    width: 100px;
    /* height: 100px; */
}
.rec-reason{
    display: inline-block;
    height: 10px;
    line-height: 10px;
    font-size: 12px;
    color: #333;
}
.showMore-btn{
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    background-color: #E5EDEF;
    color: #666;
    cursor: pointer;
}
</style>