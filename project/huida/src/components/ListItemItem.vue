<!-- 组件--ListItemItem -->
<template>
<div>
    <li @click="changeBackColor()" :class="className">
        <slot name="item"></slot>
    </li>
</div>
</template>

<script>
export default {
data() {
return {
    className:"",
}
},
methods: {
    changeBackColor(){
        this.$refs.className+="active";
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
li{
    width: 50px;
    height: 80%;
    display: block;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    float:left;
    line-height: 80%;
    text-align: center;
    border-radius: 50%;
}
.active{
    background-color: #007a8a;
}
li:hover{
    background-color: #007a8a;
}
</style>