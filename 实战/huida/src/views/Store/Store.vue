<!-- 商城页 -->
<template>
    <div class="container clearfix">
        <div class="goods-list">
            <div class="sl-nav">
                <Menu mode="horizontal">
                    <MenuItem name="1" to="/store">
                        全部
                    </MenuItem>
                    <MenuItem name="2" to="/store/lady">
                        女装
                    </MenuItem>
                    <MenuItem name="3" to="/store/man">
                        男装
                    </MenuItem>
                    <MenuItem name="4" to="/store/acce">
                        饰品
                    </MenuItem>
                    <MenuItem name="5" to="/store/shooes-bags">
                        鞋包
                    </MenuItem>
                    <MenuItem name="6" to="/store/loan">
                        租借专柜
                    </MenuItem>
                </Menu>
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="stylist-banner"></div>
    </div>
</template>

<script>
import {Menu,MenuItem} from 'view-design'
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
.goods-list{
    width: 750px;
    height: 440px;
    float: left;
}
.stylist-banner{
    width: 230px;
    height: 440px;
    background-color: antiquewhite;
    float: right;
}
</style>