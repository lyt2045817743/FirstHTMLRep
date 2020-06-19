<!-- 个人中心--我的积分页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="我的积分" name="name1">我的积分</TabPane>
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