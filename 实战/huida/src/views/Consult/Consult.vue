<!-- 咨询页 -->
<template>
    <div class="container clearfix">
        <div class="stylist-list">
            <div class="sl-nav">
                <Menu mode="horizontal">
                    <MenuItem name="1" to="/consult/recommend">
                        推荐
                    </MenuItem>
                    <MenuItem name="2" to="/consult/sort">
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
        <div class="posts-banner"></div>
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
    background-color: antiquewhite;
    float: right;
}

</style>