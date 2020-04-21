<!-- 网站上方导航栏组件 -->
<template>
    <div class="main clearfix">
        <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.jpg" alt=""></router-link>
        </div>
        <div class="head_right">
            <Menu class="main_nav" mode="horizontal" :theme="theme1" active-name="1" v-show="!$store.state.isLogining">
                <MenuItem name="1" class="mn_item">
                    <router-link to="/home">首页</router-link>
                </MenuItem>
                <MenuItem name="2" class="mn_item">
                    <router-link to="/consult">咨询</router-link>
                </MenuItem>
                <MenuItem name="3" class="mn_item">
                    <router-link to="/store">商城</router-link>
                </MenuItem>
                <MenuItem name="4" class="mn_item">
                    <router-link to="/forum">论坛</router-link>
                </MenuItem>
                <div class="personal">
                    <router-link to="/login" >
                        <span  v-show="!$store.state.isLogin" @click="changeHandle">登录</span>
                    </router-link>
                    <Dropdown v-show="$store.state.isLogin">
                        <a href="javascript:void(0)">
                            <img src="../assets/img/head.jpg">
                            <!-- <Icon type="ios-arrow-down"></Icon> -->
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>{{$store.state.loginReturn.name}}</DropdownItem>
                            <DropdownItem>顾客</DropdownItem>
                            <DropdownItem>
                                <router-link to="/personal">我的主页</router-link>
                            </DropdownItem>
                            <DropdownItem divided>
                                <span @click="logOut">退出登录</span>
                                </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                </div>
            </Menu>
            <div class="login_show_info" v-show="$store.state.isLogining">
                <span>一对一的搭配咨询</span>
                <span>同城商品放心选</span>
                <span>发布搭配需求</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {Menu,MenuItem,Dropdown,DropdownMenu,DropdownItem} from 'view-design';
    export default {
        components:{
            Menu,MenuItem,Dropdown,DropdownMenu,DropdownItem
        },
        data() {
            return {
                theme1: 'light',
            }
        },
        computed: {
            
        },
        watch: {
            
        },
        methods: {
            changeHandle(){
                this.$store.commit('changeLogining',true);
            },
            logOut(){
                this.$store.commit("setUser",null);
                sessionStorage.setItem("userInfo",null);
            }
        },
        created() {

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
        height: 55px;
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