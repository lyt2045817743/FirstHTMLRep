<!-- 咨询页 -->
<template>
    <div class="container clearfix">
        <div class="stylist-list">
            <div class="sl-nav">
                <Menu mode="horizontal" :active-name="activeName" @on-select="changePath">
                    <MenuItem name="1" to="/consult">
                        推荐
                    </MenuItem>
                    <MenuItem name="2" to="/consult/classify">
                        分类
                    </MenuItem>
                    <MenuItem name="3" to="/consult/following">
                        关注
                    </MenuItem>
                </Menu>
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="posts-banner">
            <div class="banner">
                <div class="banner-title clearfix">
                    <span class="bt-font">
                        <Icon type="ios-bookmark" />
                        最热帖子推荐
                    </span>
                    <span class="bt-btn">
                        换一换
                        <Icon type="md-sync" />
                    </span>
                </div>
                <div class="banner-content">
                    <div class="bc-item clearfix" v-for="item in postList" :key="item.id">
                        <div class="bci-info clearfix">
                            <span class="bci-title">{{item.title}}</span>
                            <span class="bci-cata left" v-if="item.cata=='搭配帖'">{{item.cata}}</span>
                            <span class="bci-cata-req left" v-if="item.cata=='求助帖'">{{item.cata}}</span>
                            <span class="bci-viewN right">
                                <Icon type="ios-eye" />
                                {{item.viewN}}
                            </span>
                        </div>
                        <img v-if="item.pics" :src="item.pics[0]" alt="">
                    </div>
                    <div class="showMore-btn">
                        更多帖子
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Menu,MenuItem,Icon} from 'view-design';
import {fromResponse} from '../../util/dataTypeConversion';
export default {
    components:{
        Menu,MenuItem,Icon
    },
    data() {
        return {
            activeName:this.$store.state.pathSet.parentIndex,
            pageNum:1,
            postList:[
                {
                    id:1,
                    title:"女生冬季怎样搭配一套简洁的衣服",
                    cata:"搭配帖",
                    pics:[
                        "http://101.200.80.171:8080/group1/M00/00/00/rBGIsF62FK6AK30AAAILkesr1JA946.png"
                    ]
                }
            ]
        }
    },
    methods: {
        initData(){
            let url="/api/post/list/time/"+this.pageNum+"/"+6;
            
            let _this=this;
            this.axios.get(url).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        let newData=[];
                        for(let i=0;i<res.data.data.list.length;i++){
                            if(res.data.data.list[i].pics&&res.data.data.list[i].pics.length!=0){
                                newData.push(fromResponse(res.data.data.list[i]));
                            }
                        }
                        _this.postList=newData;
                        console.log(_this.postList);
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
    watch: {
        
    },
    created() {
        this.initData();
    },
    mounted() {
        
    }
}
</script>
<style scoped>
.stylist-list{
    width: 750px;
    height: 440px;
    float: left;
}
.posts-banner{
    width: 230px;
    height: 440px;
    /* background-color: antiquewhite; */
    float: right;
}
.banner{
    height: 480px;
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
    height: 60px;
    padding: 0 10px;
    margin-bottom: 15px;
}
.bci-title{
    width: 145px;
    height: 40px;
    /* margin-top:10px; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
}
.bci-cata{
    margin-top: 5px;
    font-size: 12px;
    color: #007a8a;
}
.bci-cata-req{
    margin-top: 5px;
    font-size: 12px;
    color: #FF5978;
}
.bci-viewN{
    margin-top: 5px;
    font-size: 12px;
    color: #666;
}
.left{
    float:left;
}
.right{
    float:right;
}
.bci-info{
    height: 60px;
    float: left;
    text-align: left;
}
.bc-item img{
    width: 60px;
    height: 60px;
    float: right;
}
.showMore-btn{
    height: 40px;
    line-height: 40px;
    margin: 15px 10px 0;
    background-color: #E5EDEF;
    color: #666;
    cursor: pointer;
}
</style>