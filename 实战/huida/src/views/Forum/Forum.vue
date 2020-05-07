<!-- 论坛页 -->
<template>
    <div class="container clearfix">
        <div class="post-list">
            <div class="menu">
                <Menu mode="horizontal">
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
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="goods-banner">
            <div class="banner">
                <div class="banner-title clearfix">
                    <span class="bt-font">
                        最热商品推荐
                    </span>
                    <span class="bt-btn">
                        换一换
                        <Icon type="md-sync" />
                    </span>
                </div>
                <div class="banner-content"></div>
            </div>
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
.banner-title{
    width:100%;
    height:40px;
    line-height: 40px;
    padding: 0 20px;
    /* background-color: aqua; */
}
.bt-font{
    float: left;
}
.bt-btn{
    float: right;
}
</style>