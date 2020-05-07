<!-- 商城--全部商品 -->
<template>
    <div>
        <div class="goods-list">
            <Card class="gl-item" :bordered="false" :padding="10" style="width:220px;padding: 0;">
                <div style="text-align:center">
                    <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00104218/10004116/1866814319-2550803093273169920-2550803093273174017-50_420_531_353x446_90.jpg">
                    <span class="goods-title"><a href="javascript:void(0)">夏季新款运动风裙子中长款撞色抽绳显瘦宽松女式连衣裙</a></span>
                    <div class="price-sales clearfix">
                        <span class="goods-price">价格：69￥</span>
                        <span class="goods-sales">销量：200</span>
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
.gl-item{
    
}
.gl-item img{
    width: 100%;
    height: 270px;
}
.goods-title{
    text-align:left;
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