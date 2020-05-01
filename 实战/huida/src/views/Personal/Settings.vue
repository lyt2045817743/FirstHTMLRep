<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="尺码信息" name="name1" v-if="!$store.state.isStylist">尺码信息</TabPane>
            <TabPane label="展示板" name="name1" v-if="$store.state.isStylist">展示板</TabPane>
            <TabPane label="个人资料" name="name2" style="backgroundColor:white">
                <div class="personal-info clearfix">
                    <div class="pi-title">身份信息</div>
                    <div class="pi-name">
                        <span>昵称</span><br/>
                        <span>性别</span><br/>
                        <span>年龄</span><br/>
                        <span>职业</span><br/>
                        <span>个性签名</span>
                    </div>
                    <div class="pi-value" v-show="!isShow">
                        <Input v-model="userInfo.nickname" size="large" class="piv-item"/>
                        <RadioGroup v-model="userInfo.sex" class="piv-item" style="height:25px">
                            <Radio label="0">
                                <Icon type="md-male" />
                                <span>男</span> 
                            </Radio>
                            <Radio label="1">
                                <Icon type="md-female" />
                                <span>女</span>
                            </Radio>
                        </RadioGroup><br/>
                        <Input v-model="userInfo.age" size="large" number class="piv-item" />
                        <Input size="large" v-model="userInfo.job" class="piv-item" />
                        <Input v-model="userInfo.signature" type="textarea" :rows="4" placeholder="个性的展示会吸引相似的人哦~" class="piv-item" style="width:500px;marginTop: 15px;border:none;" />
                    </div>
                    <div class="pi-show" v-show="isShow">
                        <span>{{$store.state.user.nickname}}</span><br/>
                        <span>{{$store.state.user.sex}}</span><br/>
                        <span>{{$store.state.user.age}}</span><br/>
                        <span>{{$store.state.user.job}}</span><br/>
                        <span>{{$store.state.user.signature}}</span>
                    </div>
                     <Alert type="success" closable show-icon v-show="modifySuccess" style="width:150px;height:30px;float:right;position:relative;left:-310px;top:-15px;">修改成功</Alert>
                     <Button size="large" type="primary" class="pi-btn" @click="modifyInfo" v-show="isShow">修改</Button>
                     <Button size="large" type="primary" class="pi-btn" @click="commitInfo" v-show="!isShow">保存</Button>
                     <Button size="large" type="primary" ghost class="pi-btn" @click="cancelModify" v-show="!isShow">取消</Button>
                </div>
            </TabPane>
            <TabPane label="帐号设置" name="name3">
                <div class="personal-account">
                    <div class="pa-username clearfix">
                        <div class="pa-title">修改用户名</div>
                        <div class="pa-box">
                            <div class="pa-name">
                                <span>用户名</span><br/>
                            </div>
                            <div class="pa-value">
                                <Input v-model="modifyAccount.newUsername" size="large" class="piv-item" />
                            </div>
                            <Button size="large" type="primary" class="pa-btn" @click="commitAccount">保存</Button>
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
                            <Button size="large" type="primary" class="pa-btn" @click="commitAccount">保存</Button>
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
                            <Button size="large" type="primary" class="pa-btn" @click="commitAccount">开始验证</Button>
                        </div>
                    </div>
                    <!-- <div class="pa-others clearfix">
                        <div class="pa-title">关联账号</div>
                        <div class="pa-box">

                        </div>
                    </div> -->
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert} from 'view-design';
export default {
    components:{
        Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert
    },
    data() {
        return {
            isShow:true,
            modifySuccess:false,
            myEmail:"",
            userInfo:{
                username:"",
                nickname:"",
                sex:"",
                age:null,
                job:"",
                signature:""
            },
            modifyAccount:{
                newUsername:"",
                oldPassword:"",
                password:""
            }
        }
    },
    methods: {
        modifyInfo(){
            this.isShow=false;
            let userInfo=JSON.parse(JSON.stringify(this.$store.state.user));
            this.userInfo.username=userInfo.username;
            this.userInfo.nickname=userInfo.nickname;
            this.userInfo.age=userInfo.age;
            this.userInfo.job=userInfo.job;
            this.userInfo.signature=userInfo.signature;
            if(userInfo.sex=="男"||userInfo.sex==null){
                this.userInfo.sex="0";
            }else{
                this.userInfo.sex="1";
            }
        },
        cancelModify(){
            this.isShow=true;
            this.userInfo={};
        },
        commitInfo(){
            this.isShow=true;
            // this.userInfo={...(this.inputInfo)};
            let params=JSON.stringify(this.userInfo);
            let _this=this;
            this.axios.put("/api/user/"+this.$store.state.user.username,params).then(function(res){
                if(res.data.flag==true){
                    let user={};
                    user={...(_this.$store.state.user),...(_this.userInfo)};
                    if(_this.userInfo.sex=="0"){
                        user.sex="男";
                    }else if(_this.userInfo.sex=="1"){
                        user.sex="女";
                    }else{
                        user.sex="";
                    }
                    _this.$store.dispatch("setUser",user);
                    console.log(_this.$store.state.user);
                    _this.modifySuccess=true;
                }
                
            })
        },
        commitAccount(){

        }
    },
    Mounted() {
        
    },
    beforeUpdated() {
        
    },
    
    beforeCreate() {
        
        
        
    },
}
</script>
<style scoped>
/**personal-account,personal-info start*/
.personal-account,.personal-info{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}
.pa-title,.pi-title{
    height: 45px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    font-weight: bold;
}
.pi-name,.pa-name{
    width: 125px;
    float: left;
    text-align: right;
}
.pi-name span,.pi-show span,.pa-name span{
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.pi-show span{
    color: #999;
}
.pi-value,.pi-show,.pa-value{
    width: 430px;
    float: left;
    margin-left: 45px;
    text-align: left;
}
.piv-item{
    width: 300px;
    margin-top: 10px;
}
.pi-btn,.pa-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
/**personal-account,personal-info end*/

/*personal-account start*/
.pa-box{
    padding:10px 0;
}
/*personal-account end*/

</style>