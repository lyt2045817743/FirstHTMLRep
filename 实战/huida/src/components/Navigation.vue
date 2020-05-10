<!-- 网站上方导航栏组件 -->
<template>
    <div class="main clearfix">
        <div class="logo">
            <router-link to="/"><img src="../assets/img/logo.png" alt=""></router-link>
        </div>
        <div class="show-info" v-show="!$store.state.isLogining">
                <span>一对一的搭配咨询</span>
                <span>同城商品放心选</span>
                <span>发布搭配需求</span>
        </div>
        <div class="head_right">
            <Menu class="main_nav" mode="horizontal" :active-name="activeName" v-show="!$store.state.isLogining">
                <MenuItem name="1" class="mn_item" to="/home">
                    首页
                </MenuItem>
                <MenuItem name="2" class="mn_item" to="/consult">
                    咨询
                </MenuItem>
                <MenuItem name="3" class="mn_item" to="/store">
                    商城
                </MenuItem>
                <MenuItem name="4" class="mn_item" to="/forum">
                    论坛
                </MenuItem>
                <div class="personal">
                    <router-link to="/login" >
                        <span  v-show="!$store.state.hasLogin" @click="changeHandle">登录</span>
                    </router-link>
                    <Dropdown v-show="$store.state.hasLogin">
                        <a href="javascript:void(0)">
                            <!-- <img src="../assets/img/head.jpg"> -->
                             <Badge dot :count="1" class="badge" :offset="[14,0]">
                                <Avatar icon="ios-person" size="large"/>
                            </Badge>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem style="fontSize:15px"><router-link to="/personal" class="myPage" @click="changeActiveName">{{$store.state.user.role}}</router-link></DropdownItem>
                            <DropdownItem divided>消息中心 <Badge dot :count="10" :offset="[-6,-4]"></Badge></DropdownItem>
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
    // import {initPath} from '../util/views';
    export default {
        components:{
            Menu,MenuItem,Dropdown,DropdownMenu,DropdownItem,Badge,Avatar
        },
        data() {
            return {
                activeName:"1"
            }
        },
        methods: {
            changeHandle(){
                console.log(448444);
                
                this.$store.commit('changeLogining',true);
            },
            logOut(){
                this.$store.commit("changeHasLogin",false);
                this.$store.commit("setUser",null);
                unsetCookie("username");
                unsetCookie("role");
                unsetCookie("token");
                unsetCookie('uid');
                this.$router.push("/");
            },
            changeActiveName(){
                this.activeName="";
            }
        },
        created() {
        },
    }
</script>
<style scoped>
    /* .main{
        background-color: #007a8a;
    } */
    .logo{
        float: left;
        height: 60px;
    }
    .logo img{
        width: 100px;
        height: 60px;
        background-color: white;
    }
    .head_right{
        float: right;
    }
    .mn_item{
        margin-right: 40px;
        /* background-color: #007a8a; */
    }
    .personal{
        height: 55px;
        float: right;
    }
    .show-info{
        float: left;
        margin-left: 30px;
    }
    .show-info,.login_show_info{
        margin-top: 20px;
    }
    .show-info span{
        color: #999;
        margin-left: 15px;
    }
    .login_show_info span{
        margin-left: 40px;
        color: #999;
    }
</style>