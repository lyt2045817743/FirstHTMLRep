<!-- 咨询页 -->
<template>
    <div class="container clearfix">
        <div class="stylist-list">
            <div class="sl-nav">
                <Menu mode="horizontal">
                    <MenuItem name="1" to="/consult/recommend">
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
                        最热帖子推荐
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
import {Menu,MenuItem,Icon} from 'view-design'
export default {
    components:{
        Menu,MenuItem,Icon
    },
    data() {
        return {

        }
    },
    methods: {
        
    },
    watch: {
        
    },
    created() {
        
        
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