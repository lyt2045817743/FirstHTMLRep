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
        <div class="goods-banner"></div>
    </div>
</template>

<script>
import {Menu,MenuItem} from 'view-design';
export default {
    components:{
        Menu,MenuItem
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
    background-color: antiquewhite;
    float: right;
}
</style>