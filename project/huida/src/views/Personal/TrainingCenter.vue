<!-- 个人中心--培训中心页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="搭配模板" name="name1">搭配模板</TabPane>
            <TabPane label="等级考试" name="name2">等级考试</TabPane>
            <TabPane label="申请成为全职搭配师" name="name3">申请成为全职搭配师</TabPane>
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