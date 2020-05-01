<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="尺码信息" name="name1" v-if="!$store.state.isStylist">尺码信息</TabPane>
            <TabPane label="展示板" name="name1" v-if="$store.state.isStylist">展示板</TabPane>
            <TabPane label="个人资料" name="name2" style="backgroundColor:white">
                <div class="personal-info clearfix">
                    <div class="pi-name">
                        <span>登录名</span><br/>
                        <span>昵称</span><br/>
                        <span>性别</span><br/>
                        <span>年龄</span><br/>
                        <span>职业</span><br/>
                        <span>个性签名</span>
                    </div>
                    <div class="pi-value" v-show="!isShow">
                        <Input v-model="userInfo.username" size="large" class="piv-item hidden" />
                        <Input v-model="userInfo.nickname" size="large" class="piv-item hidden"/>
                        <RadioGroup v-model="userInfo.sex" class="piv-item hidden" style="height:25px">
                            <Radio label="0">
                                <Icon type="md-male" />
                                <span>男</span> 
                            </Radio>
                            <Radio label="1">
                                <Icon type="md-female" />
                                <span>女</span>
                            </Radio>
                        </RadioGroup><br/>
                        <Input v-model="userInfo.age" size="large" number class="piv-item hidden" />
                        <Input size="large" v-model="userInfo.job" class="piv-item hidden" />
                        <Input v-model="userInfo.signature" type="textarea" :rows="4" placeholder="个性的展示会吸引相似的人哦~" class="piv-item hidden" style="width:500px;marginTop: 15px;border:none;" />
                    </div>
                    <div class="pi-show" v-show="isShow">
                        <span>{{$store.state.user.username}}</span><br/>
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
            <TabPane label="帐号设置" name="name3">帐号设置</TabPane>
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
            userInfo:{
                username:"",
                nickname:"",
                sex:"",
                age:null,
                job:"",
                signature:""
            },
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
.personal-info{
    width: 100%;
    /* height: 500px; */
    padding-bottom: 20px;
}
.pi-name{
    width: 125px;
    float: left;
    text-align: right;
}
.pi-name span,.pi-show span{
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.pi-show span{
    color: #999;
}
.pi-value,.pi-show{
    width: 460px;
    float: left;
    margin-left: 45px;
    text-align: left;
}
.piv-item{
    width: 300px;
    margin-top: 10px;
}
.pi-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
</style>