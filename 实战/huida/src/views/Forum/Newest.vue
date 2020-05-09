<!-- 论坛--最新 -->
<template>
    <div>
        <div class="posts-list">
            <Card class="pl-item" v-for="item in postList" :key="item.id" :padding="10" style="width:750px;padding: 0">
                <div style="text-align:left" class="clearfix">
                    <div class="pli-left" :style="item.hasImgStyle">
                        <span class="posts-title"><a href="javascript:void(0)">{{item.title}}</a></span>
                        <p class="post-content">{{item.content}}</p>
                        <div class="posts-info clearfix">
                            <span class="posts-writer left">
                                {{item.nickname}}
                            </span>
                            <span class="posts-comment left">
                                <Icon type="md-text" />
                                {{item.commN}}
                            </span>
                            <span class="posts-like left">
                                <Icon type="md-thumbs-up" />
                                {{item.likeN}}
                            </span>
                            <span class="posts-follow left">
                                <Icon type="ios-star" />
                                {{item.followN}}
                            </span>
                            <span class="posts-browse left">
                                <Icon type="ios-eye" />
                                {{item.viewN}}
                            </span>
                            <span class="posts-time right">
                                <Icon type="ios-time-outline" />
                                {{item.postTime}}
                            </span>
                        </div>
                    </div>
                    <div class="pli-img" v-if="item.pics[0]">
                        <img :src="item.pics[0]" alt="">
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
    postList:[
        {
            id:1,
            title:"两代人的烦恼",
            content:"老张夫妇，退休前都是机关干部。当年，为了培养独生儿子成才，他们放弃了几乎所有个人爱好，把一门心思全放在了培养儿子身上。儿子也很争气，不仅学业有成...",
            nickname:"一枚老僧",
            commN:25,
            likeN:47,
            followN:10,
            viewN:105,
            headPic:"",
            postTime:"2020-05-09",
            pics:[
                "https://m.360buyimg.com/mobilecms/s450x450_jfs/t26734/297/4149446/275302/8649bb1c/5b7fd884Na481d5d6.jpg!q70.jpg.webp"
            ],
            hasImgStyle:"width: 575px;float: left;margin: 0 10px;",
        }
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
.posts-list{
}
.posts-title{
    font-size:20px;
    font-weight:bold;
}
.post-content{
    margin: 5px 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
}
.pl-item{
    margin-top:10px;
    text-align:left;
}
.posts-info{
    margin-top: 10px;
    font-size:13px;
    color:#999;
}
.left{
    float:left;
}
.right{
    float:right;
}
.posts-info span{
    margin-left:10px;
}
.pli-left{
    float: left;
}
.pli-img{
    float: right;
    margin-top: 5px;
}
.pli-img img{
    width: 100px;

}
</style>