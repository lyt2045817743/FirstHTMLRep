<!-- 商城--全部商品 -->
<template>
    <div>
        <div class="goods-list">
            <Card class="gl-item" v-for="item in goodsList" :key="item.id" :padding="10" style="width:240px;padding: 0;marginTop:15px;display:inline-block">
                <div style="text-align:left">
                    <img :src="item.goodsPic">
                    <span class="goods-title"><a href="javascript:void(0)">{{item.goodsTitle}}</a></span>
                    <div class="price-sales clearfix">
                        <span class="goods-price">价格：{{item.goodsPrice}}￥</span>
                        <span class="goods-sales">销量：{{item.goodsSales}}</span>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import {Card} from 'view-design';
export default {
    components:{
        Card
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
            id:8,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t6106/154/7277046381/169750/d0209e98/597ae519N8a217982.jpg!q70.jpg.webp",
            goodsTitle:"柏雅图2018新款女包多功能实用双肩包女士牛皮背包",
            goodsPrice:"1008",
            goodsSales:"30",
        },
        {
            id:9,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t1/10586/36/5308/151223/5c14cbefEcb851de3/4ce5ce49ce9b92ed.jpg!q70.jpg.webp",
            goodsTitle:"稻草人（MEXICAN）女包牛皮单肩斜跨女包时尚百搭小包斜挎包女士包包新款贝壳包休闲迷你包",
            goodsPrice:"480",
            goodsSales:"230",
        },
        {
            id:10,
            goodsPic:"https://m.360buyimg.com/mobilecms/s450x450_jfs/t7936/44/2454753820/141955/ebb30653/59af5d2fN578f4e27.jpg!q70.jpg.webp",
            goodsTitle:"稻草人女式手提包牛皮新款欧美时尚托特包女包单肩斜挎包小包",
            goodsPrice:"388",
            goodsSales:"121",
        },
    ]
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
.goods-list{
    text-align: left;
}
.gl-item:nth-child(3n+2){
    margin: 0 12px;
}
.gl-item img{
    width: 100%;
    height: 270px;
}
.goods-title{
    font-size: 12px;
    color: #666;
    text-align:left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.goods-price{
    float: left;
    margin-left: 20px;
}
.goods-sales{
    float: right;
    margin-right: 20px;
}
</style>