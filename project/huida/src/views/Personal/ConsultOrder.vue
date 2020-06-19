<!-- 个人中心--咨询订单页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="服务中" name="name1">服务中</TabPane>
            <TabPane label="已完成订单" name="name2">已完成订单</TabPane>
            <TabPane label="顾客评价" name="name3">顾客评价</TabPane>
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