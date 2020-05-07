<!-- 论坛--最新 -->
<template>
    <div>
        <div class="posts-list">
            <Card class="pl-item" :padding="10" style="width:750px;padding: 0">
                <div style="text-align:left">
                    <span class="posts-title"><a href="javascript:void(0)">两代人的烦恼</a></span>
                    <p>老张夫妇，退休前都是机关干部。当年，为了培养独生儿子成才，他们放弃了几乎所有个人爱好，把一门心思全放在了培养儿子身上。儿子也很争气，不仅学业有成...</p>
                    <div class="posts-info clearfix">
                        <span class="posts-writer">
                            一枚老僧
                        </span>
                        <span class="posts-comment">
                            <Icon type="md-text" />
                            25
                        </span>
                        <span class="posts-like">
                            <Icon type="md-thumbs-up" />
                            47
                        </span>
                        <span class="posts-follow">
                            <Icon type="ios-star" />
                            8
                        </span>
                        <span class="posts-browse">
                            <Icon type="ios-eye" />
                            59
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import {Card,Icon} from 'view-design';
export default {
    components:{
        Card,Icon
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
.posts-list{
}
.posts-title{
    font-size:20px;
    font-weight:bold;
}
.pl-item{
    margin-top:10px;
    text-align:left;
}
.posts-info{
    margin-top: 5px;
    font-size:13px;
    color:#999;
}
.posts-info span{
    margin-left:10px;
}
</style>