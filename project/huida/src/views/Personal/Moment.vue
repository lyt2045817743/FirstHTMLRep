<!-- 个人中心--动态页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="我发布的帖子" name="name1">
                 
            </TabPane>
            <TabPane label="我回复的帖子" name="name2">我回复的帖子</TabPane>
            <TabPane label="我赞过的帖子" name="name3">我赞过的帖子</TabPane>
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