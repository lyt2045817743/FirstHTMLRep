<!-- 组件--List -->
<template>
    <div>
        <ul>
            <slot name="lists"></slot>
        </ul>
    </div>
</template>

<script>
export default {
    components:{
    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped>
    ul{
        width: 95%;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        border: 1px solid #007a8a;
        border-radius: 10px;
    }
</style>