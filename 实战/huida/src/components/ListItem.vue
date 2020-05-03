<!-- 组件--ListItem -->
<template>
    <div>
        <li>
            <slot name="content"></slot>
            <span v-show="open" @click="openOthers">更多</span><Icon type="md-arrow-dropdown"  v-show="open"/>
        </li>
    </div>
</template>

<script>
export default {
    params:[open],
    data() {
    return {

    }
    },
    methods: {
        openOthers(){
            this.$refs.style="overflow:block"
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
li{
    width: 100%;
    height: 35px;
    position: relative;
    border-bottom: 0.5px solid #4f8286;
    padding-left: 25px;
    list-style: none;
}
li:nth-last-child(1){
    border-bottom: none;
}
li::after{
    content:"";
    display:block;
    clear:both;
}
</style>