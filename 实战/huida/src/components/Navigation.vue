<!-- 网站上方导航栏组件 -->
<template>
    <div class="main clearfix">
        <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.jpg" alt=""></router-link>
        </div>
        <div class="head_right">
            <Menu class="main_nav" mode="horizontal" :theme="theme1" active-name="1" v-show="!logining">
                <MenuItem name="1" class="mn_item">
                    <!-- <Icon type="ios-paper" /> -->
                    首页
                </MenuItem>
                <MenuItem name="2" class="mn_item">
                    咨询
                </MenuItem>
                <MenuItem name="3" class="mn_item">
                    商城
                </MenuItem>
                <MenuItem name="4" class="mn_item">
                    论坛
                </MenuItem>
                <div class="personal">
                    <router-link to="/Login" >
                        <span  v-show="!islogin" @click="changeHandle">登录</span>
                    </router-link>
                    <img src="../assets/img/head.jpg" v-show="islogin">
                </div>
            </Menu>
            <div class="login_show_info" v-show="logining">
                <span>一对一的搭配咨询</span>
                <span>同城商品放心选</span>
                <span>发布搭配需求</span>
            </div>
        </div>
        
        <!-- <br>
        <p>Change theme</p>
        <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </RadioGroup> -->
    </div>
</template>

<script>
    import {Menu,MenuItem} from 'view-design';
    export default {
        data() {
            return {
                theme1: 'light',
                islogin: false,
                logining: false
            }
        },
        methods: {
            changeHandle(){
                this.logining=true;
            }
        },
        created() {

        },
        mounted() {

        },
        components:{
            Menu,MenuItem
        }
    }
</script>
<style scoped>
    .logo{
        float: left;
        height: 60px;
    }
    .logo img{
        width: 100px;
        height: 60px;
    }
    .head_right{
        float: right;
    }
    .mn_item{
        margin-right: 40px;
    }
    .personal{
        float: right;
    }
    .personal img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 5px;
    }
    .login_show_info{
        margin-top: 20px;
    }
    .login_show_info span{
        margin-left: 40px;
        color: #999;
    }
</style>