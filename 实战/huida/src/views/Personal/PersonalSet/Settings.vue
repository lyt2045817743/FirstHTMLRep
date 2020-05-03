<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <div class="menu">
            <Menu mode="horizontal" active-name="name1">
                <MenuItem name="name1" v-if="!$store.state.isStylist" to="/personal/settings/sizeInfo">
                    尺码信息
                </MenuItem>
                <MenuItem name="name2" v-if="$store.state.isStylist" style="height:1000px" to="/personal/settings/showPanel">
                    展示板
                </MenuItem>
                <MenuItem name="name3" to="/personal/settings/personalInfo">
                    个人资料
                </MenuItem>
                <MenuItem name="name4" to="/personal/settings/account">
                    帐号设置
                </MenuItem>
            </Menu>
        </div>
        <div class="view">
            <router-view />
        </div>
    </div>
</template>

<script>
import {Menu,MenuItem } from 'view-design';
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
    Mounted() {
       
    },
    beforeUpdated() {
        
    },
    beforeMount() {
    },

    created() {
        
        
    },
    beforeCreate() {
        
    },
}
</script>
<style scoped>
.menu{
    border-bottom: 0.5px solid #999;
}
.view{
    position: relative;
}
</style>