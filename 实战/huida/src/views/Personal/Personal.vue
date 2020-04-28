<!-- 个人中心页 -->
<template>
    <div class="personal-box">
        <div class="personal-header container"></div>
        <div class="personal-content container clearfix">
            <div class="pc-nav">
                 <Menu mode="vertical" active-name="1" style="width:100%;textAlign:left">
                    <MenuItem name="1">
                        <Icon type="ios-paper" />
                        动态
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people" />
                        我的收藏
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-people" />
                        商品订单
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-people" />
                        咨询订单
                    </MenuItem>
                    <MenuItem name="5">
                        <Icon type="ios-construct" />
                        我的积分
                    </MenuItem>
                    <MenuItem name="6">
                        <Icon type="ios-construct" />
                        培训中心
                    </MenuItem>
                    <MenuItem name="7">
                        <Icon type="ios-construct" />
                        基本资料
                    </MenuItem>
                </Menu>
            </div>
            <div class="pc-content"></div>
        </div>
    </div>
</template>

<script>
    import {Menu,MenuItem,Icon} from 'view-design';
    export default {
        components:{
            Menu,MenuItem,Icon
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
                }
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>
.personal-box{
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
.personal-content{
    margin-bottom: 30px;
}
.pc-nav{
    width: 200px;
    height: 410px;
    float: left;
}
.pc-content{
    width: 780px;
    height: 410px;
    float: right;
}
</style>