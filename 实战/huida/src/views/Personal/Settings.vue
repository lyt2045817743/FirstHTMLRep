<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="尺码信息" name="name1" v-if="!$store.state.isStylist">尺码信息</TabPane>
            <TabPane label="展示板" name="name1" v-if="$store.state.isStylist">展示板</TabPane>
            <TabPane label="个人资料" name="name2">个人资料</TabPane>
            <TabPane label="帐号设置" name="name3">帐号设置</TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Tabs,TabPane} from 'view-design';
export default {
    components:{
        Tabs,TabPane
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

</style>