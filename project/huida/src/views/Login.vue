<!-- 登录注册页 -->
<template>
    <div class="login_register">
        <div class="lr_bg">
        </div>
        <div class="lr_container clearfix">
            <div class="lr_box">
                <div class="lr_nav">
                    <Tabs value="login" class="lrn_tabs" style="width: 300px">
                        <TabPane label="登录" name="login" class="lr_form">
                            <Input v-model="loginInfo.username" placeholder="请输入用户名" style="width: 250px;margin-top: 20px"/><br/>
                            <Input v-model="loginInfo.password" type="password" password placeholder="请输入密码" style="width: 250px;margin-top: 25px" />
                            <Button type="success" style="width: 250px;margin-top:25px" @click="userLogin">登录</Button>
                            <br/>
                            <span class="msg">{{loginMsg}}</span>
                             <div class="other-login">
                                <div class="ol-title">
                                    <fieldset>
                                        <legend>其他方式登录</legend>
                                    </fieldset>
                                </div>
                                <div class="ol-links">
                                    <a href="javascript:void(0)"><i></i></a>
                                    <a href="javascript:void(0)"><i></i></a>
                                    <a href="javascript:void(0)"><i></i></a>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane label="注册" name="register">
                            <Input v-model="regInfo.username" placeholder="请输入用户名" style="width: 250px;margin-top: 25px"/><br/>
                             <Input v-model="regInfo.password" type="password" password placeholder="请输入密码" style="width: 250px;margin-top: 25px" />
                            <Input placeholder="请输入验证码" style="width: 130px;margin: 25px 10px 0 auto"/><Button type="default" style="margin: 25px 0 0 10px">获取验证码</Button><br/>
                            <Button type="success" style="width: 250px;margin-top:25px" @click="register">注册</Button>
                            <span class="msg">{{regMsg}}</span>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,Button} from 'view-design';
import {setCookie,getCookie} from '../util/cookie';
import { fromResponse } from '../util/dataTypeConversion';
import {pathName} from '../util/views';
export default {
    components: {
        Tabs,TabPane,Input,Button
    },
    data() {
        return {
            loginInfo:{
                username:'',
                password:'',
            },
            regInfo:{
                username:'',
                password:'',
                // veriCode:'',
            },
            userInfo:"",
            userToken:"",
            loginMsg:"",
            regMsg:""
        }
    },
    methods: {
        userLogin(){
            //将登录表单键值对存储到fromdata对象中
            let params=new FormData();
            params.append("username",this.loginInfo.username);
            params.append("password",this.loginInfo.password);
            let _this=this;

            //发送登录请求
            this.axios.post("/api/user/login",params).then(function(res){
                // 如果成功登录，则将用户信息和token存储至sessionStorage和vuex中
                if(res.data.flag==true&&res.data.message=="登录成功"){
                    let data=res.data.data;
                    let user={};

                    let expires=new Date();
                    expires.setDate(expires.getDate()+7);
                    user=fromResponse(data.user);

                    //标识用户身份
                    if(user.role=="搭配师"){
                        _this.$store.commit("changeIsStylist",true);
                    }

                    //将用户信息与token存储到cookie中
                    setCookie("role",user.role,expires,null,null,null);
                    setCookie("token",data.token,expires,null,null,null);
                    setCookie("username",data.user.username,expires,null,null,null);
                    setCookie("uid",data.user.uid,expires,null,null,null);


                    //将用户信息存储到vuex中
                    _this.$store.commit("setUser",user);
                    //切换header内容至导航
                    _this.$store.commit('changeLogining',false);
                    //改变登陆状态
                    _this.$store.commit("changeHasLogin",true);

                    
                    //登陆成功后切换路由至home
                    if(getCookie('username')){
                        if(sessionStorage.getItem("pathSet")){
                            let pathSet=JSON.parse(sessionStorage.getItem("pathSet"));
                            let path=pathName(pathSet);
                            _this.$router.push(path);
                        }
                        else{
                            _this.$router.push('/home');
                        }
                        

                    }
                }
                else{
                    _this.loginMsg="用户名或密码有误！"
                }
            })
        },
        register(){
            let data=JSON.stringify(this.regInfo);
            let _this=this;
            this.axios.post('/api/user/register',data,{headers:{'content-type':'application/json'}}).then(function(res){
                if(res.data.flag==true&&res.data.message=="注册成功"){
                    _this.regMsg="注册成功，快去登录吧！";
                } 
                else if(res.data.message=="用户名已存在"){
                    _this.regMsg="用户名已存在！";
                }            
            });
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
.login_register{
    position: relative;
}
.lr_container{
    width: 1130px;
    margin: -458px auto 0;
}
.lr_bg{
    width: 100%;
    height: 460px;
    margin: 50px auto 0;
    background-image: url('../assets/img/banner1.jpg');
    background-repeat: no-repeat;
    background-position: center top;
}
.lr_container .lr_box{
    width: 415px;
    height: 357px;
    float: right;
    z-index: 1;
    border: 1px solid #f7f7f7;
    background-color: white;
}
.lrn_tabs{
    margin: 30px auto 0;
}
.lrn_tabs .msg{
    height: 10px;
    color: red;
    font-size: 10px;
    display: inline-block;
    margin-top: 5px;
}
.other-login{
    width: 250px;
    margin:0 auto;
}
.other-login fieldset{
    border:0;
    border-top:1px solid #e0e0e0;
    text-align: center;
    width: 250px;
}
.other-login legend{
    color: #bbb;
}
.ol-title{
    padding:0 0 13px;
}
.ol-links a{
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 17px;
}
.ol-links a:nth-child(1){
    background-color: #0288d1;
}
.ol-links a:nth-child(2){
    background-color: #0ae;
}
.ol-links a:nth-child(3){
    background-color: #00d20d;
}
.ol-links i{
    background-image: url("../assets/img/icons_type.png");
    width: 18px;
    height: 18px;
    margin:4px auto 0;
    display: inline-block;
}
.ol-links a:nth-child(1) i{
    background-position: -19px 0;
}
.ol-links a:nth-child(2) i{
    background-position: -57px 0;
    margin-top: 6px;
    margin-left: 4px;
    width: 25px;
}
.ol-links a:nth-child(3) i{
    background-position: -83px 0;
    margin-top: 6px;
    width: 24px;
}
</style>