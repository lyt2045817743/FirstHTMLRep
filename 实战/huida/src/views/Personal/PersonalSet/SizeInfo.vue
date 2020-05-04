<!--  -->
<template>
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
                <span>特征标签</span><br/>
                <span>风格标签</span><br/>
                <span>场合标签</span><br/>
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
                <div class="tags">
                    <CheckboxGroup v-model="newRelked.feature">
                        <Checkbox v-for="item in featureTags" :key="item.id" :label="item.tag" :value="item.id"></Checkbox>
                    </CheckboxGroup>
                </div>
                <div class="tags">
                    <CheckboxGroup v-model="newRelked.style">
                        <Checkbox v-for="item in styleTags" :key="item.id" :label="item.tag" :value="item.id"></Checkbox>
                    </CheckboxGroup>
                </div>
                <div class="tags">
                    <CheckboxGroup v-model="newRelked.occasion">
                        <Checkbox v-for="item in occasionTags" :key="item.id" :label="item.tag" :value="item.id"></Checkbox>
                    </CheckboxGroup>
                </div>
            </div>

            <!-- 展示尺码信息 -->
            <div class="ps-show" v-show="showRelked.cwi">
                <Select v-model="nowShow" style="width:170px;marginTop:17px;height: 27px;">
                    <Option v-for="item in $store.state.user.cwis" :value="item" :key="item">{{ item }}</Option>
                </Select><br/>
                <span>{{showRelked.sex}}</span><br/>
                <span>{{showRelked.age}}</span><br/>
                <span class="pss-smallItem">{{showRelked.height}}</span><span class="unit">cm</span> <span>体重</span> <span class="pss-smallItem">{{showRelked.weight}}</span><span class="unit">kg</span><br/>
                <span>胸围</span> <span class="pss-smallItem">{{showRelked.bust}}</span><span class="unit">cm</span> <span>腰围</span> <span class="pss-smallItem">{{showRelked.waistline}}</span><span class="unit">cm</span><span>臀围</span> <span class="pss-smallItem">{{showRelked.hips}}</span><span class="unit">cm</span><br/>
                <span class="pss-smallItem">{{showRelked.lowPrice}}</span><span class="unit">元</span> <span style="marginRight:20px">——</span> <span class="pss-smallItem">{{showRelked.highPrice}}</span><span class="unit">元</span><br/>
                <!-- lalalallalalalalalalalalalalalalalalalalalalalaallalaalalalalalallalalalaalalala -->
                <div class="tags">
                    <span v-for="item in showRelked.featTags" :key="item.id">{{item.tag}}</span>
                </div>
                <div class="tags">
                    <span v-for="item in showRelked.styTags" :key="item.id">{{item.tag}}</span>
                </div>
                <div class="tags">
                    <span v-for="item in showRelked.occaTags" :key="item.id">{{item.tag}}</span>
                </div>

            </div>
            <!-- 按钮 -->
            <Button size="large" type="primary" class="ps-add-btn" @click="creatNewSizeInfo" v-show="showRelked.cwi">新增尺寸信息</Button><br/>
            <Button size="large" type="primary" class="ps-btn" @click="modifySizeInfo" v-show="showRelked.cwi" style="position:relative;left: -150px;">修改</Button><br/>
            <Button size="large" type="error" class="ps-btn" @click="deleteSizeInfo" v-show="showRelked.cwi"  style="position:relative;left: 50px;top: -140px;">删除</Button>
            <Button size="large" type="primary" class="ps-btn" @click="commitSizeInfo" v-show="!showRelked.cwi" style="position: relative;left:-50px">保存</Button>
            <Button size="large" type="primary" ghost class="ps-btn" @click="cancelSizeInfo" v-show="!showRelked.cwi" style="position: relative;left:50px">取消</Button>
        </div>
    </div>
</template>

<script>
import {Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,CheckboxGroup,Checkbox} from 'view-design';
import {toRequest,fromResponse} from '../../../util/dataTypeConversion';
import {toNumber,toStr} from '../../../util/arrayContent';
import {initPath} from '../../../util/views'
export default {
    components:{
        Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option,CheckboxGroup,Checkbox
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
            //尺码信息
            isModify:false,
            init:true,
            nowShow:"",
            nowShowTdId:0,
            relkwd:null,
            styleTags:[],
            occasionTags:[],
            featureTags:[],
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
                priceEpt:[],
                feature:[],
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
                priceEpt:[],
                featTags:[
                    {
                        id: 0,
                        tag: "暂无",
                    }
                ],
                occaTags:[
                    {
                        id: 0,
                        tag: "暂无",
                    }
                ],
                styTags:[
                    {
                        id: 0,
                        tag: "暂无",
                    }
                ],
                preferClothingPic:""
            },
        }
    },
    computed: {

    },
     watch: {
         nowShow(newVal){
             if(!this.init){
                //从relkwd中获取tdId
                for(var i=0;i<this.relkwd.length;i++){
                    if(this.relkwd[i].cwi==newVal){
                        this.nowShowTdId=this.relkwd[i].tdId;
                        break;
                    }
                }
                //axios请求第一条td信息
                let _this=this;
                let url="/api/user/td/"+_this.nowShowTdId;
                this.axios.get(url).then(function(res){
                    if(res.data.flag==true){
                        let newData=fromResponse(res.data.data);
                        _this.showRelked=newData;
                        console.log(res.data.data);
                        console.log(_this.showRelked);
                        // console.log(url);
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;  
                        console.log(url);
                    }
                })
             }
         }

        // //待定 好像没有用
        // showRelked(newVal){
        //     if(newVal.cwi){
        //        this.nowShow=newVal.cwi;
        //     }
        // }
    },
    methods: {
        //全局
        closeSucBtn(pageName){
            this.modifySuccess[pageName]="";
        },
        closeErrBtn(pageName){
            this.errorMessage[pageName]="";
        },
         //尺码信息
        getSizeData(){
            //获取3tags的信息
            let url="/api/user/tags";
            let _this=this;
            this.axios.get(url).then(function(res){
                    console.log(res.data);
                    
                    if(res.data.flag==true){
                        if(res.data.data){
                            let data=res.data.data;
                            // _this.relkwd=JSON.parse(JSON.stringify(res.data.data));
                            _this.styleTags=data.styleTags;
                            _this.occasionTags=data.occasionTags;
                            _this.featureTags=data.featureTags;
                        }
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;
                        console.log(res.data.message);
                    }
            })
            //获取该用户的称谓及其tdId
            url="/api/user/td/relkwd/"+this.$store.state.user.uid;
            this.axios.get(url).then(function(res){
                    console.log(url);
                    console.log(res.data);
                    
                    if(res.data.flag==true){
                        if(res.data.data){
                            _this.relkwd=JSON.parse(JSON.stringify(res.data.data));
                            //获取已有的第一条td信息
                            if((_this.relkwd instanceof Array) && _this.relkwd.length!=0){
                                _this.init=false;
                                //从relkwd中获取tdId
                                for(var i=0;i<_this.relkwd.length;i++){
                                    if(_this.relkwd[i].cwi==_this.showRelked.cwi){
                                        _this.nowShowTdId=_this.relkwd[i].tdId;
                                        break;
                                    }
                                }
                                //axios请求第一条td信息
                                let url="/api/user/td/"+_this.nowShowTdId;
                                _this.axios.get(url).then(function(res){
                                        if(res.data.flag==true){
                                            let newData=fromResponse(res.data.data);
                                            _this.showRelked=newData;
                                            console.log(res.data.data);
                                            console.log(_this.showRelked);
                                            // console.log(url);
                                            
                                        }
                                        else{
                                            _this.errorMessage['尺码信息']=res.data.message;  
                                            console.log(url);
                                        }
                                })
                            }
                        }
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;
                        console.log(res.data.message);
                    }
            })
        
        },
        modifySizeInfo(){
            this.newRelked={...this.showRelked};
            //将字符串数组转换成对应的数值数组
            this.newRelked.feature=toStr(this.showRelked.featTags);
            this.newRelked.style=toStr(this.showRelked.styTags);
            this.newRelked.occasion=toStr(this.showRelked.occaTags);
            //删掉多余的属性（用于请求的参数干净）
            delete this.newRelked.occaTags;
            delete this.newRelked.styTags;
            delete this.newRelked.featTags;
            //隐藏显示信息
            this.showRelked.cwi="";

            this.isModify=true;  

        },
        deleteSizeInfo(){
            //从relkwd中获取tdId
            for(var i=0;i<this.relkwd.length;i++){
                if(this.relkwd[i].cwi==this.showRelked.cwi){
                    this.nowShowTdId=this.relkwd[i].tdId;
                    break;
                }
            }
            let url="/api/user/td/"+this.nowShowTdId;
            
            let _this=this;
            this.axios.delete(url).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        _this.update();
                        _this.nowShow=_this.$store.state.user.cwis[4];
                    }
                    else{
                        console.log(res.data.message);
                        console.log(url);
                        
                    }
            })
        },
        creatNewSizeInfo(){
            this.showRelked.cwi="";
            this.isModify=false;
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
                priceEpt:[],
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
                newRelked.feature=toNumber(newRelked.feature,this.featureTags);
                newRelked.style=toNumber(newRelked.style,this.styleTags);
                newRelked.occasion=toNumber(newRelked.occasion,this.occasionTags);
                // console.log(newRelked);
                
                let params=JSON.stringify(toRequest(newRelked));
                
                let _this=this;
                this.axios.post(url,params).then(function(res){
                        console.log(res.data);
                        if(res.data.flag==true){
                            // _this.modifySuccess['尺码信息']="修改成功";
                            let newData=fromResponse(res.data.data);
                            _this.showRelked=newData;
                            _this.nowShow=newData.cwi;
                            _this.nowShowTdId=newData.id;
                            // console.log(_this.nowShow,_this.nowShowTdId,_this.showRelked.cwi,_this.showRelked.id);
                            
                            //更新数据
                            _this.update();
                        }
                        else if(res.data.code==20006){
                            this.errorMessage['尺码信息']="这个称呼用过啦，换一个吧！"
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
                newRelked.feature=toNumber(newRelked.feature,this.featureTags);
                newRelked.style=toNumber(newRelked.style,this.styleTags);
                newRelked.occasion=toNumber(newRelked.occasion,this.occasionTags);
                let params=JSON.stringify(toRequest(newRelked));
                // console.log(params);
                
                let _this=this;
                this.axios.put(url,params).then(function(res){
                        console.log(res.data);
                        
                        //修改成功
                        if(res.data.flag==true){
                            _this.isModify=false;
                            // _this.modifySuccess['尺码信息']="修改成功";
                            let newData=fromResponse(res.data.data);
                            _this.showRelked=newData;
                            // console.log(_this.showRelked);
                            //更新数据
                            _this.update();
                        }
                        else{
                            console.log(res.data.message);
                        }
                })
            }
            
        },
        cancelSizeInfo(){
            if((this.relkwd instanceof Array)&&this.relkwd.length!=0){
                console.log(1111);
                
                this.showRelked.cwi=this.nowShow;
                // this.nowShow=this.relkwd[0].cwi;
                // console.log(this.relkwd);
            }
            else{
                this.newRelked={};
            }
        },
        update(){
            //重新获取用户信息
            let _this=this;
            this.axios.get("/api/user/"+_this.$store.state.user.uid).then(function(res){
                let data=res.data.data;
                console.log(res.data);
                
                if(res.data.flag==true){
                    let user={};
                    user=fromResponse(data);
                    _this.$store.commit("setUser",user);
                }
            })

            //更新relkwd
            let url="/api/user/td/relkwd/"+_this.$store.state.user.uid;
            this.axios.get(url).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        _this.relkwd=res.data.data;
                        // let user={...(_this.$store.state.user),...{cwis:res.data.data}};
                        // _this.$store.commit("setUser",user);
                        // console.log(_this.$store.state.user.cwis);
                        
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;
                        console.log(res.data.message);
                    }
            }) 
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        if(this.$store.state.user.role=="顾客"){
            this.nowShow=this.$store.state.user.cwis[4];
            this.showRelked.cwi=this.$store.state.user.cwis[4];
            this.getSizeData();
        }
        //初始化路径
            let pathSetting=initPath(this.$route.path);
            this.nowPath=pathSetting.childIndex;
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
.personal-sizeInfo{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}
.ps-box{
    padding:10px 0;
}
.ps-name{
    width: 125px;
    float: left;
    text-align: right;
}
.ps-name span{
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.ps-show span{
    margin-top: 20px;
    color: #999;
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
.psv-largeItem{
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
.ps-btn{
    display:inline-block;
    margin:50px auto;
}
.ps-add-btn{
    position: absolute;
    left: 620px;
}
.tags{
    height: 45px;
}
.tags span{
    margin-right:10px;
}
</style>