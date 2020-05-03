<!-- 基本资料--账户设置 -->
<template>
    <div class="personal-account">
        <Alert type="success" closable on-close="closeSucBtn('账号设置')" show-icon v-show="modifySuccess['账号设置']!=''" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
        <Alert type="error" closable   on-close="closeErrBtn('账号设置')" v-show="errorMessage['账号设置']!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage['账号设置']}}</Alert>
        <div class="pa-username clearfix">
            <div class="pa-title">修改用户名</div>
            <div class="pa-box">
                <div class="pa-name">
                    <span>用户名</span><br/>
                </div>
                <div class="pa-value">
                    <Input v-model="modifyAccount.username" size="large" class="piv-item" />
                </div>
                <Button size="large" type="primary" class="pa-btn" @click="commitUsername">保存</Button>
            </div>
        </div>
        <div class="pa-pwd clearfix">
            <div class="pa-title">修改密码</div>
            <div class="pa-box">
                <div class="pa-name">
                    <span>原密码</span><br/>
                    <span>新密码</span><br/>
                </div>
                <div class="pa-value">
                    <Input v-model="modifyAccount.oldPassword" type="password" password class="piv-item" />
                    <Input v-model="modifyAccount.password" type="password" password class="piv-item" />
                </div>
                <Button size="large" type="primary" class="pa-btn" @click="commitPwd">保存</Button>
            </div>
        </div>
        <div class="pa-email clearfix">
            <div class="pa-title">邮箱验证</div>
            <div class="pa-box">
                <div class="pa-name">
                    <span>邮箱</span><br/>
                </div>
                <div class="pa-value">
                    <Input v-model="myEmail" size="large" class="piv-item" />
                </div>
                <Button size="large" type="primary" class="pa-btn" @click="commitEmail">开始验证</Button>
            </div>
        </div>
        <!-- <div class="pa-others clearfix">
            <div class="pa-title">关联账号</div>
            <div class="pa-box">

            </div>
        </div> -->
    </div>
</template>

<script>
import {Input,Button,Alert} from 'view-design';
import {setCookie} from '../../../util/cookie';
export default {
    components:{
        Input,Button,Alert
    },
    data() {
    return {
        //全局
            isShow:true,
            modifySuccess:{
                "个人信息":"",
                "账号设置":"",
                "尺码信息":"",
                "展示板":"",
            },
            errorMessage:{
                "个人信息":"",
                "账号设置":"",
                "尺码信息":"",
                "展示板":"",
            },
        //账号设置
        myEmail:"",
        modifyAccount:{
            username:"",
            oldPassword:"",
            password:""
        }
    }
},
methods: {
    //全局
        closeSucBtn(pageName){
            this.modifySuccess[pageName]="";
        },
        closeErrBtn(pageName){
            this.errorMessage[pageName]="";
        },
     //账号设置
        commitUsername(){
            let expries=new Date();
            let _this=this;
            expries.setDate(expries.getDate()+7);
            let params=JSON.stringify({"username":this.modifyAccount.username});
            
            this.axios.put("/api/user/"+this.$store.state.user.uid,params).then(function(res){
                if(res.data.flag==true){
                    let user={...(_this.$store.state.user),...{username:_this.modifyAccount.username}};
                    setCookie("username",res.data.data.username,expries,null,null,null);
                    _this.$store.commit("setUser",user);
                    _this.modifySuccess['账号设置']=res.data.message;
                    
                }
                else{
                    _this.errorMessage['账号设置']=res.data.message;
                }
                
            })
        },
        commitPwd(){
            let _this=this;
            let params=JSON.stringify({"oldPassword":this.modifyAccount.oldPassword,"password":this.modifyAccount.password});
            
            this.axios.put("/api/user/"+this.$store.state.user.uid,params).then(function(res){
                if(res.data.flag==true){
                    let user={...(_this.$store.state.user),...{password:_this.modifyAccount.password}};
                    _this.$store.commit("setUser",user);
                    _this.modifySuccess['账号设置']=true;                    
                }
                else{
                    _this.errorMessage['账号设置']=res.data.message;
                }
                
            })
        },
        commitEmail(){

        },
},
created() {

},
mounted() {

}
}
</script>
<style scoped>
.personal-account{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}

.pa-title{
    height: 45px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    font-weight: bold;
}
.pa-box{
    padding:10px 0;
}
.pa-name{
    width: 125px;
    float: left;
    text-align: right;
}
.pa-name span{
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.pa-value{
    width: 430px;
    float: left;
    margin-left: 45px;
    text-align: left;
}

.piv-item{
    width: 300px;
    margin-top: 15px;
}
.pa-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
</style>