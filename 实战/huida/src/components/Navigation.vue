<!-- 网站上方导航栏组件 -->
<template>
    <div class="main clearfix">
        <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.jpg" alt=""></router-link>
        </div>
        <div class="head_right">
            <Menu class="main_nav" mode="horizontal" :theme="theme1" :active-name="activeName" v-show="!$store.state.isLogining">
                <MenuItem name="1" class="mn_item" to="/consult">
                    咨询
                </MenuItem>
                <MenuItem name="2" class="mn_item" to="/store">
                    商城
                </MenuItem>
                <MenuItem name="3" class="mn_item" to="/forum">
                    论坛
                </MenuItem>
                <div class="personal">
                    <router-link to="/login" >
                        <span  v-show="!$store.state.hasLogin" @click="changeHandle">登录</span>
                    </router-link>
                    <Dropdown v-show="$store.state.hasLogin">
                        <a href="javascript:void(0)">
                            <!-- <img src="../assets/img/head.jpg"> -->
                             <Badge :count="1" class="badge" :offset="[12,0]" overflow-count="99">
                                <Avatar icon="ios-person" size="large"/>
                            </Badge>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>{{$store.state.loginReturn.name}}</DropdownItem>
                            <DropdownItem>顾客</DropdownItem>
                            <DropdownItem>
                                <router-link to="/personal" class="myPage" @click="changeActiveName">我的主页</router-link>
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
    import {Menu,MenuItem,Dropdown,DropdownMenu,DropdownItem,Badge,Avatar} from 'view-design';
    import {unsetCookie} from '../util/cookie';
    export default {
        components:{
            Menu,MenuItem,Dropdown,DropdownMenu,DropdownItem,Badge,Avatar
        },
        data() {
            return {
                theme1: 'light',
            }
        },
        computed: {
            activeName(){
                if(this.$route.path!="/login"){
                    this.$store.commit("changeLogining",false);            
                }
                return this.$route.path;
            }
        },
        watch: {
            nowPath(newVal){
                if(newVal){
                    // console.log(newVal);
                    
                }
            }
        },
        methods: {
            changeHandle(){
                this.$store.commit('changeLogining',true);
            },
            logOut(){
                this.$store.commit("setUser",null);
                unsetCookie("username");
                unsetCookie("role");
                unsetCookie("token");
                this.$store.commit("changeHasLogin",false);
                this.$router.push("/");
            },
            changeActiveName(){
                this.activeName="";
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
    .login_show_info{
        margin-top: 20px;
    }
    .login_show_info span{
        margin-left: 40px;
        color: #999;
    }
</style>