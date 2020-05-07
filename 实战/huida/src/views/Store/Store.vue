<!-- 商城页 -->
<template>
    <div class="container clearfix">
        <div class="goods-list">
            <div class="sl-nav clearfix">
                <Menu mode="horizontal" class="menu">
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
                <Input search enter-button placeholder="输入你想搜索的宝贝" class="search-input"/>
            </div>
            <div class="view">
                <router-view />
            </div>
        </div>
        <div class="stylist-banner">
            <div class="banner">
                <div class="banner-title clearfix">
                    <span class="bt-font">
                        优质搭配师推荐
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
import {Menu,MenuItem,Icon,Input} from 'view-design'
export default {
    components:{
        Menu,MenuItem,Icon,Input
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
.sl-nav{
    height: 61px;
    border-bottom: 2px solid #dcdee2;
}
.menu{
    width: 450px;
    float: left;
}
.search-input{
    width: 300px;
    float: right;
    margin-top: 15px;
}
.stylist-banner{
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