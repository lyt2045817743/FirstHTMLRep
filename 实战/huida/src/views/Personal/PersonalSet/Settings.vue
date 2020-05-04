<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <div class="menu">
            <Menu mode="horizontal" :active-name="nowPath" style="width:400px">
                <MenuItem name="1" v-if="!$store.state.isStylist" to="/personal/settings/sizeInfo">
                    尺码信息
                </MenuItem>
                <MenuItem name="2" v-if="$store.state.isStylist" style="height:1000px" to="/personal/settings/showPanel">
                    展示板
                </MenuItem>
                <MenuItem name="3" to="/personal/settings/personalInfo">
                    个人资料
                </MenuItem>
                <MenuItem name="4" to="/personal/settings/account">
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
import {initPath} from '../../../util/views'
export default {
    components:{
        Menu,MenuItem 
    },
    data() {
        return {
            nowPath:"1"
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
        //初始化路径
            let pathSetting=initPath(this.$route.path);
            this.nowPath=pathSetting.childIndex;
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