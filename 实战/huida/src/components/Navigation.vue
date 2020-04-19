<!-- 网站上方导航栏组件 -->
<template>
    <div class="main clearfix">
        <div class="logo">
            <img src="../assets/img/logo.jpg" alt="">
        </div>
        <Menu class="main_nav" mode="horizontal" :theme="theme1" active-name="1">
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
                <MenuItem  v-show="!islogin" name="4">
                    登录
                </MenuItem>
                <img src="../assets/img/head.jpg" v-show="islogin">
            </div>
            
        </Menu>
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
                islogin: true
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
    .main_nav{
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
</style>