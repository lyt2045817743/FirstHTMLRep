<!-- 个人中心页 -->
<template>
    <div class="personal-box">
        <div class="personal-header container clearfix">
            <div class="ph-left clearfix">
                <span class="phl-img"><Avatar icon="ios-person" size="60" style="fontSize:50px"/></span>
                <div class="phl-info">
                    <div class="phli-top" style="marginBottom: 5px">
                        <span class="nickname" v-if="$store.state.user.nickname">{{$store.state.user.nickname}}</span>
                        <span class="nickname" v-if="!$store.state.user.nickname">未设置昵称</span>
                        <Icon type="ios-person" />
                        <span>{{$store.state.user.role}}</span>
                    </div>
                    <div class="phli-bottom">
                        <span>关注：{{$store.state.user.mineFollows}}</span>
                        <span class="fans">粉丝：{{$store.state.user.mineFans}}</span>
                        <span>申请成为搭配师 ></span>
                    </div>
                </div>
            </div>
            <div class="ph-right">
                <div class="pr-btn" v-if="!$store.state.isStylist">咨询中心</div>
                <div class="pr-btn" v-if="!$store.state.isStylist" style="marginLeft: 80px;">购物车</div>
                <div class="pr-btn" v-if="$store.state.isStylist">消息中心</div>
            </div>
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
            this.nowPath=pathSetting.parentIndex;
        },
        mounted() {

        },
        beforeCreate() {
            

            
        },
    }
</script>

<style scoped>
.personal-box{
    height: 800px;
    background-color: #f7f7f7;
    overflow: hidden;
}
.personal-header,.pc-nav,.pc-content{
    background-color: white;
}
.personal-header{
    height: 100px;
    margin: 20px auto;
}
.ph-left{
    height: 100%;
    float: left;
    text-align: left;
}
.phl-img{
    width: 70px;
    height: 70px;
    margin: 15px;
    display: inline-block;
}
.phl-info{
    position: relative;
    top: -75px;
    left: 95px;
    text-align: left;
    font-size: 12px;
}
.phl-info .fans{
    margin-right: 20px;
}
.phl-info .nickname{
    font-size: 20px;
    font-weight: bold;
}
.phl-info span{
    margin-right: 10px;
}
.ph-right{
    float: right;
    margin-right: 100px;
    margin-top: 30px;
}
.pr-btn{
    width: 90px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    background-color: #007a8a;
    font-size: 18px;
    color: white;
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