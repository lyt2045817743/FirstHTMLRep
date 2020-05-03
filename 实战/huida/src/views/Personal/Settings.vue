<!-- 个人中心--基本资料页 -->
<template>
    <div>
        <Tabs value="name1" style="marginTop:15px" :animated="false">

            <!-- --------------------尺码信息---------------------- -->

            <TabPane label="尺码信息" name="name1" v-if="!$store.state.isStylist">
                <div class="personal-sizeInfo clearfix">
                    <!-- 提示框 -->
                    <Alert type="success" closable on-close="closeSucBtn('尺码信息')" show-icon v-show="modifySuccess['尺码信息']!=''" style="width:150px;height:30px;position:absolute;top:35px;left:300px;">修改成功</Alert>
                    <Alert type="error" closable   on-close="closeErrBtn('尺码信息')" v-show="errorMessage['尺码信息']!=''" show-icon style="width:150px;height:30px;position:absolute;top:35px;left:300px;">{{errorMessage['尺码信息']}}</Alert>
                    <!-- 表单 -->
                    <div class="ps-box clearfix">
                        <div class="ps-name">
                            <span>他/她是您的</span><br/>
                            <span>性别</span><br/>
                            <span>年龄</span><br/>
                            <span>身高</span><br/>
                            <span>三围</span><br/>
                            <span>消费预算</span><br/>
                            <!-- <span>特征标签</span><br/>
                            <span>风格标签</span><br/>
                            <span>场合标签</span><br/> -->
                        </div>
                        <!-- 填写尺码信息 -->
                        <div class="ps-value" v-show="!showRelked.cwi">
                            <Input v-model="newRelked.cwi" size="default" class="psv-largeItem"/>
                            <RadioGroup v-model="newRelked.sex" class="psv-largeItem" style="height:29px;">
                                <Radio label="男">
                                    <Icon type="md-male" />
                                    <span>男</span> 
                                </Radio>
                                <Radio label="女">
                                    <Icon type="md-female" />
                                    <span>女</span>
                                </Radio>
                            </RadioGroup><br/>
                            <Input v-model="newRelked.age" size="default" type="number" class="psv-largeItem" /><br/>
                            <div class="inline-box">
                                <Input size="default" v-model="newRelked.height" type="number" class="psv-smallItem" /><span class="unit">cm</span> <span>体重</span> <Input size="default"  type="number" v-model="newRelked.weight" class="psv-smallItem" /><span class="unit">kg</span>
                            </div>
                            <div class="inline-box">
                                <span>胸围</span> <Input size="default"  type="number" v-model="newRelked.bust" class="psv-smallItem" /><span class="unit">cm</span> <span>腰围</span> <Input size="default"  type="number" v-model="newRelked.waistline" class="psv-smallItem" /><span class="unit">cm</span><span>臀围</span><Input size="default" v-model="newRelked.hips"  type="number" class="psv-smallItem" /><span class="unit">cm</span>
                            </div>
                            <div class="inline-box">
                                <Input size="default" v-model="newRelked.lowPrice"  type="number" class="psv-smallItem" /><span class="unit">元</span> <span style="marginRight:20px">——</span><Input size="default" type="number" v-model="newRelked.highPrice" class="psv-smallItem" /><span class="unit">元</span>
                            </div>
                            <!-- lalalallalalalalalalalalalalalalalalalalalalalaallalaalalalalalallalalalaalalala -->
                        </div>

                        <!-- 展示尺码信息 -->
                        <div class="ps-show" v-show="showRelked.cwi">
                           <Select v-model="nowShow" style="width:170px;marginTop:17px;height: 27px;">
                                <Option v-for="item in relkwd" :value="item.tdId" :key="item.tdId">{{ item.cwi }}</Option>
                            </Select><br/>
                            <span>{{showRelked.sex}}</span><br/>
                            <span>{{showRelked.age}}</span><br/>
                            <span class="pss-smallItem">{{showRelked.height}}</span><span class="unit">cm</span> <span>体重</span> <span class="pss-smallItem">{{showRelked.weight}}</span><span class="unit">kg</span><br/>
                            <span>胸围</span> <span class="pss-smallItem">{{showRelked.bust}}</span><span class="unit">cm</span> <span>腰围</span> <span class="pss-smallItem">{{showRelked.waistline}}</span><span class="unit">cm</span><span>臀围</span> <span class="pss-smallItem">{{showRelked.hips}}</span><span class="unit">cm</span><br/>
                            <span class="pss-smallItem">{{showRelked.lowPrice}}</span><span class="unit">元</span> <span style="marginRight:20px">——</span> <span class="pss-smallItem">{{showRelked.highPrice}}</span><span class="unit">元</span><br/>
                            <!-- lalalallalalalalalalalalalalalalalalalalalalalaallalaalalalalalallalalalaalalala -->
                        </div>
                        <!-- 按钮 -->
                        <Button size="large" type="primary" class="ps-add-btn" @click="creatNewSizeInfo" v-show="showRelked.cwi">新增尺寸信息</Button><br/>
                        <Button size="large" type="primary" class="ps-btn" @click="modifySizeInfo" v-show="showRelked.cwi" style="position:relative;left:-120px;top:60px">修改</Button><br/>
                        <Button size="large" type="error" class="ps-btn" @click="deleteSizeInfo" v-show="showRelked.cwi">删除</Button>
                        <Button size="large" type="primary" class="ps-btn" @click="commitSizeInfo" v-show="!showRelked.cwi" style="position:relative;left:-120px;">保存</Button>
                        <Button size="large" type="primary" ghost class="ps-btn" @click="cancelSizeInfo" v-show="!showRelked.cwi">取消</Button>
                    </div>
                </div>
            </TabPane>

            <!-- --------------------展示板---------------------- -->
            <TabPane label="展示板" name="name2" v-if="$store.state.isStylist" style="height:1000px">
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
                        <div class="ss-box clearfix">
                            <div class="ssb-name">
                                <span>当前服务状态</span><br/>
                                <span style="marginTop:30px">服务开头语</span><br/>
                                <span style="marginTop:80px">我擅长的风格</span><br/>
                                <span style="marginTop:40px">我擅长的场合</span><br/>
                            </div>
                            <div class="ssb-value">
                                <RadioGroup v-model="stylist.online" class="ssb-item" style="height:29px;">
                                    <Radio label="1">
                                        <span>在线</span> 
                                    </Radio>
                                    <Radio label="2">
                                        <span>可预约</span>
                                    </Radio>
                                    <Radio label="0">
                                        <span>休息中</span>
                                    </Radio>
                                </RadioGroup><br/>
                                <Input v-model="stylist.greeting" type="textarea" :rows="3" placeholder="当顾客打开聊天框，系统就会自动发送的内容哦~" class="ssb-item" style="width:500px;height:65px;border:none;" />
                            </div>
                            <div class="ssb-show">

                            </div>
                            <Button size="large" type="primary" class="ps-btn" @click="commitSizeInfo" v-show="!showRelked.cwi" style="position:relative;left:-120px;">保存</Button>
                        <Button size="large" type="primary" ghost class="ps-btn" @click="resetSizeInfo" v-show="!showRelked.cwi">重置</Button>
                        </div>
                    </div>
                    <div class="ss-btn">

                    </div>
                </div>
                
            </TabPane>

            <!-- --------------------个人信息---------------------- -->

            <TabPane label="个人资料" name="name3" style="backgroundColor:white">
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
            </TabPane>

            <!-- --------------------账号设置---------------------- -->

            <TabPane label="帐号设置" name="name4">
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
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,Rate} from 'view-design';
import {setCookie} from '../../util/cookie';
import {toRequest,fromResponse} from '../../util/dataTypeConversion';
export default {
    components:{
        Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,Rate
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
            
            //展示板
            valueCustomText:3.8,
            stylist:{
                online:"1",
                greeting:"",
                specStyTags:"",
                specOccTags:""
            },

            //尺码信息
            isModify:false,
            nowShow:"",
            nowShowTdId:0,
            relkwd:null,
            newRelked:{
                uid:this.$store.state.user.uid,
                cwi:"",
                age:"",
                sex:"男",
                height:"",
                weight:"",
                bust:"",
                waistline:"",
                hips:"",
                lowPrice:"",
                highPrice:"",
                feature	:[],
                occasion:[],
                style:[],
                preferClothingPic:""
            },
            showRelked:{
                uid:this.$store.state.user.uid,
                cwi:"",
                age:"",
                sex:"",
                height:"",
                weight:"",
                bust:"",
                waistline:"",
                hips:"",
                lowPrice:"",
                highPrice:"",
                feature	:[],
                occasion:[],
                style:[],
                preferClothingPic:""
            },

            //个人信息
            userInfo:{
                nickname:"",
                sex:"",
                age:null,
                job:"",
                signature:""
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
    computed: {
        //展示板
        autoShow(){
            if((this.relkwd instanceof Array)&&this.relkwd.length!=0){
                let arr=[...this.relkwd];
                console.log(2222);
                
                return arr[0].cwi;
            }
            else{
                return null;
            }
      }
    },
    watch: {
        relkwd(newVal){
            if(newVal){
                this.nowShow=this.autoShow;
            }
        },
        nowShow(newVal){
            if((this.relkwd instanceof Array) && this.relkwd.length!=0){
                for(var i=0;i<this.relkwd.length;i++){
                    if(this.relkwd[i].cwi==newVal){
                        this.nowShowTdId=this.relkwd[i].tdId;
                        break;
                    }
                }
                let url="/api/user/td/"+this.nowShowTdId;
                let _this=this;
                this.axios.get(url).then(function(res){
                        console.log(res.data);
                        if(res.data.flag==true){
                            let newData=fromResponse(res.data.data);
                            _this.showRelked=newData;
                            console.log(res.data.data);
                            
                            console.log(_this.showRelked);
                            
                        }
                        else{
                            _this.errorMessage['尺码信息']=res.data.message;  
                            console.log(url);
                        }
                })
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

        //个人信息
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

        //尺码信息
        getSizeData(){
            let url="/api/user/td/relkwd/"+this.$store.state.user.uid;
            let _this=this;
            this.axios.get(url).then(function(res){
                    console.log(url);
                    console.log(res.data);
                    
                    if(res.data.flag==true){
                        if(res.data.data){
                            _this.relkwd=JSON.parse(JSON.stringify(res.data.data));
                        }
                        console.log("axios");
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;
                        console.log(res.data.message);
                    }
            })
        
        },
        modifySizeInfo(){
            this.newRelked={...this.showRelked};
            this.showRelked.cwi="";
            this.isModify=true;
        },
        deleteSizeInfo(){
            // let url="/api/user/td/"+this.nowShowTdId;
            // let params=JSON.stringify({});
            // console.log(params);
            
            // let _this=this;
            // this.axios.delete(url).then(function(res){
            //         console.log(res.data);
            //         if(res.data.flag==true){

            //         }
            //         else{
            //             console.log(res.data.message);
            //             console.log(url);
            //             console.log(params);
                        
            //         }
            // })
        },
        creatNewSizeInfo(){
            this.showRelked.cwi="";
            this.newRelked={
                uid:this.$store.state.user.uid,
                cwi:"",
                age:"",
                sex:"男",
                height:"",
                weight:"",
                bust:"",
                waistline:"",
                hips:"",
                lowPrice:"",
                highPrice:"",
                feature	:[],
                occasion:[],
                style:[],
                preferClothingPic:""
            };
        },
        commitSizeInfo(){
            if(!(this.isModify)){
                //新增
                console.log("新增");
                
                let url="/api/user/td";
                let newRelked={...(this.newRelked),...{uid:this.$store.state.user.uid}};
                console.log(newRelked);
                
                let params=JSON.stringify(toRequest(newRelked));
                
                let _this=this;
                this.axios.post(url,params).then(function(res){
                        console.log(res.data);
                        if(res.data.flag==true){
                            // let newData=fromResponse(res.data.data);
                            _this.modifySuccess['尺码信息']="修改成功";
                            let newData=fromResponse(res.data.data);
                            _this.showRelked=newData;

                            let url="/api/user/relkwd/"+_this.$store.state.user.uid;
                            _this.axios.get(url).then(function(res){
                                    console.log(res.data);
                                    if(res.data.flag==true){
                                        _this.relkwd=res.data.data;
                                    }
                                    else{
                                        _this.errorMessage['尺码信息']=res.data.message;
                                        console.log(res.data.message);
                                    }
                            })
                        }
                        else{
                            console.log(res.data.message);
                        }
                })
            }
            else{
                //修改
                console.log("修改");
                
                let url="/api/user/td/"+this.nowShowTdId;
                let newRelked={...(this.newRelked),...{uid:this.$store.state.user.uid}};
                let params=JSON.stringify(toRequest(newRelked));
                
                let _this=this;
                this.axios.put(url,params).then(function(res){
                        console.log(res.data);

                        //修改成功
                        if(res.data.flag==true){
                            // let newData=fromResponse(res.data.data);
                            _this.isModify=false;
                            _this.modifySuccess['尺码信息']="修改成功";
                            let newData=fromResponse(res.data.data);
                            _this.showRelked=newData;

                            let url="/api/user/relkwd/"+_this.$store.state.user.uid;
                            _this.axios.get(url).then(function(res){
                                    console.log(res.data);
                                    if(res.data.flag==true){
                                        _this.relkwd=res.data.data;
                                    }
                                    else{
                                        _this.errorMessage['尺码信息']=res.data.message;
                                        console.log(res.data.message);
                                    }
                            })
                        }
                        else{
                            console.log(res.data.message);
                        }
                })
            }
            
        },
        cancelSizeInfo(){
            if((this.relkwd instanceof Array)&&this.relkwd.length!=0){
                this.nowShow=this.relkwd[0].cwi;
                console.log(this.relkwd);
                
            }
            else{
                this.newRelked={};
            }
        },
        
        //展示板
        getShowPanelInfo(){
            
        }
    },
    Mounted() {
       
    },
    beforeUpdated() {
        
    },
    beforeMount() {
    },

    created() {
        if(this.$store.state.user.role=="顾客"){
            this.getSizeData();
        }
        else if(this.$store.state.user.role=="搭配师"){
            this.getShowPanelInfo();
        }
    },
    beforeCreate() {
        
    },
}
</script>
<style scoped>
/**personal-account,personal-info,personal-sizeInfo,stylist-showPanelstart*/
.personal-account,.personal-info,.personal-sizeInfo,.stylist-showPanel{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}
.stylist-showPanel{
    height: 800px;
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
    width: 55px;
    /* margin-top: 10px; */
}
.pss-smallItem{
    width: 55px;
    text-align: center;
}
.pi-btn,.pa-btn{
    float: right;
    margin: 10px 40px 0 auto;
}
.ps-btn{
    display:inline-block;
    margin:10px auto;
}
.ps-add-btn{
    position: absolute;
    left: 620px;
}
/**personal-account,personal-info,personal-sizeInfo,stylist-showPanelstart end*/

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
.ssb-name{
    float:left;
    text-align: left;
}
.ssb-name span{
    width: 85px;
    margin-top: 20px;
    display: inline-block;
    font-weight: bold;
}
.ssb-value,.ssb-show{
    width: 630px;
    float: right;
    text-align: left;
}
.ssb-item{
    margin-top:18px;
}
/*stylist-showPapel end*/
</style>