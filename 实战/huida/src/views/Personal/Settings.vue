<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">
            <TabPane label="尺码信息" name="name1" v-if="!$store.state.isStylist">
                <div class="personal-sizeInfo clearfix">
                    <Alert type="success" closable on-close="closeSucBtn" show-icon v-show="modifySuccess" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
                    <Alert type="error" closable   on-close="closeErrBtn" v-show="errorMessage!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage}}</Alert>
                    <div class="ps-box clearfix">
                        <div class="ps-name">
                            <span>他/她是您的</span><br/>
                            <span>性别</span><br/>
                            <span>年龄</span><br/>
                            <span>身高</span><br/>
                            <span>三围</span><br/>
                            <span>消费预算</span><br/>
                            <span>特征标签</span><br/>
                            <span>风格标签</span><br/>
                            <span>场合标签</span><br/>
                        </div>
                        <div class="ps-value" v-show="relkwd.length==0">
                            <Input v-model="newRelked.cwi" size="default" class="psv-largeItem"/>
                            <RadioGroup v-model="newRelked.sex" class="psv-largeItem" style="height:29px;">
                                <Radio label="0">
                                    <Icon type="md-male" />
                                    <span>男</span> 
                                </Radio>
                                <Radio label="1">
                                    <Icon type="md-female" />
                                    <span>女</span>
                                </Radio>
                            </RadioGroup><br/>
                            <Input v-model="newRelked.age" size="default" number class="psv-largeItem" /><br/>
                            <div class="inline-box">
                                <Input size="default" v-model="newRelked.height" class="psv-smallItem" /><span class="unit">cm</span> <span>体重</span> <Input size="default" v-model="newRelked.weight" class="psv-smallItem" /><span class="unit">kg</span>
                            </div>
                            <div class="inline-box">
                                <span>胸围</span> <Input size="default" v-model="newRelked.bust" class="psv-smallItem" /><span class="unit">cm</span> <span>腰围</span> <Input size="default" v-model="newRelked.waistline" class="psv-smallItem" /><span class="unit">cm</span><span>臀围</span><Input size="default" v-model="newRelked.hips" class="psv-smallItem" /><span class="unit">cm</span>
                            </div>
                            <div class="inline-box">
                                <Input size="default" v-model="newRelked.priceEpt[0]" class="psv-smallItem" /><span class="unit">元</span> <span style="marginRight:20px">——</span><Input size="default" v-model="newRelked.priceEpt[1]" class="psv-smallItem" /><span class="unit">元</span>
                            </div>
                            <!-- lalalallalalalalalalalalalalalalalalalalalalalaallalaalalalalalallalalalaalalala -->
                        </div>

                        <div class="ps-show" v-show="relkwd.length!=0">
                           <Select v-model="nowShow" style="width:170px;marginTop:17px;height: 27px;">
                                <Option v-for="i in relkwd" :value="i" :key="i">{{ i }}</Option>
                            </Select><br/>
                            <span>{{showRelked.sex}}</span><br/>
                            <span>{{showRelked.age}}</span><br/>
                            <span class="psv-smallItem">{{showRelked.height}}</span><span class="unit">cm</span> <span>体重</span> <span class="psv-smallItem">{{showRelked.weight}}</span><span class="unit">kg</span><br/>
                            <span>胸围</span> <span class="psv-smallItem">{{showRelked.bust}}</span><span class="unit">cm</span> <span>腰围</span> <span class="psv-smallItem">{{showRelked.waistline}}</span><span class="unit">cm</span><span>臀围</span> <span class="psv-smallItem">{{showRelked.hips}}</span><span class="unit">cm</span><br/>
                            <span class="psv-smallItem">{{showRelked.priceEpt[0]}}</span><span class="unit">元</span> <span style="marginRight:20px">——</span> <span class="psv-smallItem">{{showRelked.priceEpt[1]}}</span><span class="unit">元</span><br/>
                            <!-- lalalallalalalalalalalalalalalalalalalalalalalaallalaalalalalalallalalalaalalala -->
                        </div>
                       
                        <Button size="large" type="primary" class="ps-add-btn" @click="modifyInfo" v-show="relkwd.length!=0">新增尺寸信息</Button><br/>
                        <Button size="large" type="error" class="ps-btn" @click="modifyInfo" v-show="relkwd.length!=0" style="position:relative;left:-60px;">删除</Button>
                        <Button size="large" type="primary" class="ps-btn" @click="commitInfo" v-show="relkwd.length==0" style="position:relative;left:-120px;">保存</Button>
                        <Button size="large" type="primary" ghost class="ps-btn" @click="cancelModify" v-show="relkwd.length==0">重置</Button>
                    </div>
                </div>
            </TabPane>
            <TabPane label="展示板" name="name2" v-if="!$store.state.isStylist">
                <div class="stylist-showPanel">
                    <div class="ss-show">
                        <div class="ss-title">展示部分</div>
                        <div class="ss-box">
                            <div class="spb-info">
                                <div class="info-item clearfix">
                                    <span class="ii-name">职位</span><span class="ii-value">兼职搭配师</span>
                                </div>
                                <div class="info-item clearfix">
                                    <span class="ii-name">等级</span><span class="ii-value">一级搭配师</span>

                                </div>
                                <div class="info-item clearfix">
                                    <span style="float:left;width:65px;fontWeight:bold;textAlign:left">成交量</span><span style="float:left;width:50px;textAlign:left">1128</span>
                                    <span style="float:left;width:70px;fontWeight:bold;textAlign:left">活跃度</span><span style="float:left;width:50px;textAlign:left">30</span>
                                </div>
                                <div class="info-item clearfix">
                                    <span class="ii-name" style="width:50px">总评分</span>
                                    <span class="ii-value" style="width:160px">
                                        <Rate allow-half v-model="valueCustomText" disabled style="width:150px;">
                                            <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                                        </Rate>
                                    </span>
                                </div>
                                <div class="info-item clearfix">
                                    <span class="ii-name">服务态度评分</span>
                                    <span class="ii-value" style=" width:138px;">
                                        <Rate allow-half v-model="valueCustomText" disabled style="width:150px;">
                                            <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                                        </Rate>
                                    </span>

                                </div>
                                <div class="info-item clearfix">
                                    <span class="ii-name">搭配能力评分</span>
                                        <span class="ii-value" style="width:138px;">
                                        <Rate allow-half v-model="valueCustomText" disabled style="width:150px;">
                                            <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                                        </Rate>
                                    </span>
                                </div>
                            </div>
                            <div class="spb-price clearfix">
                                <span class="price-name">服务价格区间</span>
                                <div class="prive-value" style="display:inline-block">
                                    <span style="width:50px;textAlign:center;display:inline-block;">0</span>
                                    <span class="unit">元</span>
                                    <span>—</span>
                                    <span style="width:50px;textAlign:center;display:inline-block;">10</span>
                                    <span class="unit">元</span>
                                </div>
                                
                            </div>
                            <div class="spb-comment" style="marginTop:12px;">
                                <div class="lately-comment clearfix">
                                    <span class="lc-name">最近评价</span>
                                    <p class="comment">搭配是很负责任，找的衣服我都很喜欢。真实，态度好，易沟通</p>
                                </div>
                                <div class="hot-comment clearfix">
                                    <span class="hc-name">最热评价</span>
                                    <p class="comment">搭配是很负责任，找的衣服我都很喜欢。真实，态度好，易沟通</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ss-set">
                        <div class="ss-title">自我设置</div>

                    </div>
                    <div class="ss-btn">

                    </div>
                </div>
                
            </TabPane>
            <TabPane label="个人资料" name="name3" style="backgroundColor:white">
                <div class="personal-info clearfix">
                    <Alert type="success" closable on-close="closeSucBtn" show-icon v-show="modifySuccess" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
                    <Alert type="error" closable   on-close="closeErrBtn" v-show="errorMessage!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage}}</Alert>
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
            </TabPane>
            <TabPane label="帐号设置" name="name4">
                <div class="personal-account">
                    <Alert type="success" closable on-close="closeSucBtn" show-icon v-show="modifySuccess" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
                    <Alert type="error" closable   on-close="closeErrBtn" v-show="errorMessage!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage}}</Alert>
                    <div class="pa-username clearfix">
                        <div class="pa-title">修改用户名</div>
                        <div class="pa-box">
                            <div class="pa-name">
                                <span>用户名</span><br/>
                            </div>
                            <div class="pa-value">
                                <Input v-model="modifyAccount.newUsername" size="large" class="piv-item" />
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
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,Rate} from 'view-design';
import {setCookie} from '../../util/cookie'
export default {
    components:{
        Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,Rate
    },
    data() {
        return {
            isShow:true,
            modifySuccess:"",
            errorMessage:"",
            myEmail:"",
            valueCustomText:3.8,
            relkwd:["我","妈妈","姥姥"],
            newRelked:{
                username:this.$store.state.user.username,
                cwi:"",
                age:0,
                sex:"0",
                height:"",
                weight:"",
                bust:"",
                waistline:"",
                hips:"",
                priceEpt:[],
                feature	:[],
                occasion:[],
                style:[],
                preferClothingPic:""
            },
            showRelked:{
                username:this.$store.state.user.username,
                cwi:"",
                age:0,
                sex:"0",
                height:"",
                weight:"",
                bust:"",
                waistline:"",
                hips:"",
                priceEpt:[],
                feature	:[],
                occasion:[],
                style:[],
                preferClothingPic:""
            },
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
    computed: {
        nowShow(){
            console.log(this.relkwd[0]);
            return this.relkwd[0];
      }
    },
    methods: {
        closeSucBtn(){
            this.modifySuccess="";
        },
        closeErrBtn(){
            this.errorMessage="";
        },
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
                    _this.modifySuccess=true;
                }
                else{
                    _this.errorMessage=res.data.message;
                }
            })
        },
        commitUsername(){
            let expries=new Date();
            let _this=this;
            expries.setDate(expries.getDate()+7);
            let params=JSON.stringify({"newUsername":this.modifyAccount.newUsername});
            
            this.axios.put("/api/user/"+this.$store.state.user.username,params).then(function(res){
                if(res.data.flag==true){
                    let user={...(_this.$store.state.user),...{username:_this.modifyAccount.newUsername}};
                    setCookie("username",res.data.data.username,expries,null,null,null);
                    _this.$store.commit("setUser",user);
                    
                }
                else{
                    _this.errorMessage=res.data.message;
                }
                
            })
        },
        commitPwd(){
            let _this=this;
            let params=JSON.stringify({"oldPassword":this.modifyAccount.oldPassword,"password":this.modifyAccount.password});
            
            this.axios.put("/api/user/"+this.$store.state.user.username,params).then(function(res){
                if(res.data.flag==true){
                    let user={...(_this.$store.state.user),...{password:_this.modifyAccount.password}};
                    _this.$store.commit("setUser",user);
                    _this.modifySuccess=true;                    
                }
                else{
                    _this.errorMessage=res.data.message;
                }
                
            })
        },
        commitEmail(){

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
.personal-account,.personal-info,.personal-sizeInfo,.stylist-showPanel{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}
.pa-title,.pi-title,.ss-title{
    height: 45px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    font-weight: bold;
}
.pa-box,.pi-box,.ps-box{
    padding:10px 0;
}
.pi-name,.pa-name,.ps-name{
    width: 125px;
    float: left;
    text-align: right;
}
.pi-name span,.pi-show span,.pa-name span,.ps-name span{
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.pi-show span,.ps-show span{
    color: #999;
}
.ps-show span{
    margin-top: 20px;
}
.pi-value,.pi-show,.pa-value{
    width: 430px;
    float: left;
    margin-left: 45px;
    text-align: left;
}
.ps-value,.ps-show{
    width: 530px;
    float: left;
    margin-left: 45px;
    text-align: left;
}
.ps-value span,.ps-show span{
    height: 20px;
    display: inline-block;
    font-size: 18px;
}
.inline-box{
    margin: 14px 0;
}
.unit{
    margin-left: 5px;
    margin-right: 20px;
}
.piv-item,.psv-largeItem{
    width: 300px;
    margin-top: 15px;
}
.psv-smallItem{
    width: 50px;
    /* margin-top: 10px; */
}
.pi-btn,.pa-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
.ps-btn{
    margin:10px auto;
}
.ps-add-btn{
    position: absolute;
    left: 620px;
}
/**personal-account,personal-info end*/

/*stylist-showPapel start*/
.info-item{
    width: 236px;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    margin: 10px 10px 0 auto;
}
.ii-name,.price-name,.hc-name,.lc-name{
    width: 85px;
    float: left;
    font-weight: bold;
    text-align: left;
}
.price-name,.hc-name,.lc-name{
    margin-top: 13px;
}
.ii-value{
    width: 135px;
    float: right;
    text-align: left;
}
.spb-price{
    text-align: left;
}
.prive-value{
    margin-top: 13px;
}
.comment{
    width: 630px;
    height: 50px;
    margin-top: 12px;
    text-align: left;
    display: inline-block;
    background-color: #f7f7f7;
}
/*stylist-showPapel end*/
</style>