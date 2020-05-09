<!-- 论坛--最新 -->
<template>
    <div>
        <div class="posts-list">
            <Card class="pl-item" v-for="item in postList" :key="item.id" :padding="10" style="width:750px;padding: 0">
                <div style="text-align:left" class="clearfix">
                    <div class="pli-left" :style="item.hasImgStyle">
                        <span class="posts-title">{{item.title}}</span>
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
                            <span class="posts-cata-req right" v-if="item.cata=='求助帖'">
                                {{item.cata}}
                            </span>
                            <span class="posts-cata right" v-if="item.cata=='搭配帖'">
                                {{item.cata}}
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
import {fromResponse} from '../../util/dataTypeConversion';
export default {
    components:{
        Card,Icon
    },
data() {
return {
    pageNum:1,
    postList:[]
}
},
methods: {
    initData(){
        let url="/api/post/list/time/"+this.pageNum+"/"+8;
        
        let _this=this;
        this.axios.get(url).then(function(res){
                console.log(res.data);
                if(res.data.flag==true){
                    let newData=res.data.data.list;
                    for(let i=0;i<newData.length;i++){
                        newData[i]=fromResponse(newData[i]);
                    }
                    _this.postList=newData;
                    console.log(_this.postList);
                }
                else{
                    console.log(res.data.message);
                    console.log(url);
                }
        })
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
.posts-title{
    font-size:20px;
    font-weight:bold;
    color: #007a8a;
}
.post-content{
    height: 40px;
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
.posts-cata{
    color: #007a8a;
}
.posts-cata-req{
    color: #FF5978;
}
.posts-info span{
    margin-left:10px;
}
.pli-left{
    float: left;
    padding-right: 20px;
}
.pli-img{
    float: right;
    margin-top: 5px;
}
.pli-img img{
    width: 100px;
    height: 100px;
}
</style>