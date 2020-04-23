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
                            <Input v-model="loginInfo.name" placeholder="请输入手机号/邮箱" style="width: 250px;margin-top: 20px"/><br/>
                            <Input v-model="loginInfo.pwd" type="password" password placeholder="请输入密码" style="width: 250px;margin-top: 25px" />
                            <Button type="success" style="width: 250px;margin-top:25px" @click="userLogin">登录</Button>
                            <br/>
                            <span class="msg">{{loginInfo.msg}}</span>
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
                            <Input v-model="regInfo.name" placeholder="请输入手机号/邮箱" style="width: 250px;margin-top: 25px"/><br/>
                             <Input v-model="regInfo.pwd" type="password" password placeholder="请输入密码" style="width: 250px;margin-top: 25px" />
                            <Input v-model="regInfo.veriCode" placeholder="请输入验证码" style="width: 130px;margin: 25px 10px 0 auto"/><Button type="default" style="margin: 25px 0 0 10px">获取验证码</Button><br/>
                            <Button type="success" style="width: 250px;margin-top:25px" @click="register">注册</Button>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,Button} from 'view-design';
import axios from 'axios'
export default {
    components: {
        Tabs,TabPane,Input,Button
    },
    data() {
        return {
            loginInfo:{
                name:'',
                pwd:'',
                msg:'',
            },
            regInfo:{
                name:'',
                pwd:'',
                veriCode:'',
            },
            userInfo:{
                name:'123456',
                veriCode:'',
                pwd:'123456',
                hasLogin:true
            }
        }
    },
    methods: {
        userLogin(){
            //如果成功登录，则将用户信息存储至sessionStorage和vuex中
            if(this.userInfo.name==this.loginInfo.name && this.userInfo.pwd==this.loginInfo.pwd){
                sessionStorage.setItem("userInfo",JSON.stringify(this.userInfo));
                this.$store.commit('setUser',this.userInfo);
                this.$store.commit('changeLogining',false);//切换head内容至导航
                this.$router.push('/home');
            }
            else{
                this.loginInfo.msg="用户名或密码有误！"
            }
        },
        register(){
            axios.post('http://101.200.80.171:9001/api/user/register',{"username":"lyt","password":"lyt123"}).then(function(res){
                console.log(res);
                
            })
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
    margin: -418px auto 0;
}
.lr_bg{
    width: 100%;
    height: 460px;
    margin: 50px auto 0;
    background-image: url('../assets/img/login_bg.jpg');
    background-repeat: no-repeat;
    background-position: center top;
}
.lr_container .lr_box{
    width: 415px;
    height: 385px;
    float: right;
    z-index: 1;
    border: 1px solid #999;
    background-color: white;
}
.lrn_tabs{
    margin: 45px auto 0;
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