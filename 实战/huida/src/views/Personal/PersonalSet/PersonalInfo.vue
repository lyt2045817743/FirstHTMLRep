<!--  -->
<template>
    <div class="personal-info clearfix">
        <Alert type="success" closable on-close="closeSucBtn('个人信息')" show-icon v-show="modifySuccess['个人信息']!=''" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
        <Alert type="error" closable   on-close="closeErrBtn('个人信息')" v-show="errorMessage['个人信息']!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage['个人信息']}}</Alert>
        <div class="pi-title">身份信息</div>
        <div class="pi-box clearfix">
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
            
            <Button size="large" type="primary" class="pi-btn" @click="modifyInfo" v-show="isShow">修改</Button>
            <Button size="large" type="primary" class="pi-btn" @click="commitInfo" v-show="!isShow">保存</Button>
            <Button size="large" type="primary" ghost class="pi-btn" @click="cancelModify" v-show="!isShow">取消</Button>
        </div>
    </div>
</template>

<script>
import {Input,RadioGroup,Radio,Icon,Button,Alert} from 'view-design';
export default {
    components:{
        Input,RadioGroup,Radio,Icon,Button,Alert
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
            //个人信息
            userInfo:{
                nickname:"",
                sex:"",
                age:null,
                job:"",
                signature:""
            },
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
        //个人信息
        modifyInfo(){
            this.isShow=false;
            let userInfo=JSON.parse(JSON.stringify(this.$store.state.user));
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
            let params=JSON.stringify(this.userInfo);
            let _this=this;
            this.axios.put("/api/user/"+this.$store.state.user.uid,params).then(function(res){
                console.log(res.data);
                
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
                    _this.modifySuccess['个人信息']="修改成功";
                }
                else{
                    _this.errorMessage['个人信息']=res.data.message;
                }
            })
        },
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
.personal-info{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}

.pi-title{
    height: 45px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    font-weight: bold;
}
.pi-box{
    padding:10px 0;
}
.pi-name{
    width: 125px;
    float: left;
    text-align: right;
}
.pi-name span,.pi-show span{
    height: 20px;
    display: inline-block;
    margin-top: 24px;
    font-size: 18px;
}
.pi-show span{
    color: #999;
}
.pi-value,.pi-show{
    width: 430px;
    float: left;
    margin-left: 45px;
    text-align: left;
}
.inline-box{
    margin: 14px 0;
}
.piv-item{
    width: 300px;
    margin-top: 15px;
}
.pi-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
</style>