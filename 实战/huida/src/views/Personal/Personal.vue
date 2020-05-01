<!-- 个人中心页 -->
<template>
    <div class="personal-box">
        <div class="personal-header container clearfix">
            <div class="ph-left clearfix">
                <span class="phl-img"><Avatar icon="ios-person" size="60" style="fontSize:40px"/></span>
                <div class="phl-info">
                    <div class="phli-top">
                        <span class="nickname">I'm fine</span>
                        <span>积极的消费者</span>
                    </div>
                    <div class="phli-bottom">
                        <span>关注：20</span>
                        <span class="fans">粉丝：20</span>
                        <span>申请成为搭配师 ></span>
                    </div>
                </div>
            </div>
            <div class="ph-right"></div>
        </div>
        <div class="personal-content container clearfix">
            <div class="pc-nav">
                 <Menu mode="vertical" :active-name="nowPath" style="width:100%;height:410px;textAlign:left" class="pnc-box">
                    <MenuItem name="1" class="pcn-item" to="/personal">
                        <Icon type="md-aperture" />
                        动态
                    </MenuItem>
                    <MenuItem name="2" class="pcn-item" to="/personal/myFollowings">
                        <Icon type="md-star" />
                        我的收藏
                    </MenuItem>
                    <MenuItem name="3" v-if="!$store.state.isStylist" class="pcn-item" to="/personal/goodsOrder">
                        <Icon type="md-reorder" />
                        商品订单
                    </MenuItem>
                    <MenuItem name="4" v-if="$store.state.isStylist" class="pcn-item" to="/personal/consultOrder">
                        <Icon type="md-reorder" />
                        咨询订单
                    </MenuItem>
                    <MenuItem name="5" v-if="!$store.state.isStylist" class="pcn-item" to="/personal/myPoints">
                        <Icon type="ios-card-outline" />
                        我的积分
                    </MenuItem>
                    <MenuItem name="6" v-if="$store.state.isStylist" class="pcn-item" to="/personal/trainingCenter">
                        <Icon type="md-school" />
                        培训中心
                    </MenuItem>
                    <MenuItem name="7" class="pcn-item" to="/personal/settings">
                        <Icon type="ios-person" />
                        基本资料
                    </MenuItem>
                </Menu>
            </div>
            <div class="pc-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import {Menu,MenuItem,Icon,Avatar} from 'view-design';
    import {initPath} from '../../util/views'
    export default {
        components:{
            Menu,MenuItem,Icon,Avatar
        },
        data() {
            return {
                menu:{
                    customer:{
                        '动态':['我发布的帖子','我回复的帖子','我赞过的帖子'],
                        '商品订单':['待发货','待收货','评价与售后'],
                        '我的收藏':['收藏的商品','收藏的店铺'],
                        '我的积分':['积分详情'],
                        '基本资料':['个人资料','尺码信息','账号设置']
                    },
                    stylist:{
                         '动态':['我发布的帖子','我回复的帖子','我赞过的帖子'],
                        '商品订单':['服务中','已完成订单','顾客评价'],
                        '我的收藏':['收藏的商品','收藏的店铺'],
                        '培训中心':['搭配模板','','申请成为全职搭配师'],
                        '基本资料':['展示板','个人资料','账号设置']
                    }
                },
                nowPath:"5"
            }
        },
        
        created() {
            //初始化路径
            let pathSetting=initPath(this.$route.path);
            this.nowPath=pathSetting.index;
        },
        mounted() {

        },
        beforeCreate() {
            let _this=this;
            //发送请求获取用户个人信息
            this.axios.get("/api/user/"+this.$store.state.user.username).then(function(res){
                let data=res.data.data;
                if(res.data.flag==true&&res.data.message=="查询成功"){
                    let user={};
                    user={...data};
                    if(user.role=="0"){
                        user.role="顾客";
                    }
                    else if(user.role=="1"){
                        user.role="搭配师";
                    }
                    if(user.sex=="0"){
                        user.sex="男";
                    }
                    else if(user.sex=="1"){
                        user.sex="女";
                    }
                    _this.$store.dispatch("setUser",user);
                    console.log(_this.$store.state.user);
                    
                }
            })

            
        },
    }
</script>

<style scoped>
.personal-box{
    height: 700px;
    background-color: #f7f7f7;
    overflow: hidden;
}
.personal-header,.pc-nav,.pc-content{
    background-color: white;
}
.personal-header{
    height: 90px;
    margin: 10px auto;
}
.ph-left{
    height: 100%;
    float: left;
    text-align: left;
}
.ph-right{
    float: right;
}
.phl-img{
    width: 60px;
    height: 60px;
    margin: 15px;
    display: inline-block;
}
.phl-info{
    position: relative;
    top: -67px;
    left: 85px;
    text-align: left;
    font-size: 12px;
}
.phl-info .fans{
    margin-right: 20px;
}
.phl-info .nickname{
    font-size: 20px;
}
.phl-info span{
    margin-right: 10px;
}
.personal-content{
    margin-bottom: 30px;
}
.pc-nav{
    width: 200px;
    height: 410px;
    float: left;
}
.pnc-box{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.pcn-item{
    font-size: 20px;
}
.pc-content{
    width: 780px;
    height: 410px;
    float: right;
}
</style>