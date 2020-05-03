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
            <Button size="large" type="primary" class="ps-btn" @click="modifySizeInfo" v-show="showRelked.cwi"  style="position:absolute;top:282px;left:250px;">修改</Button><br/>
            <Button size="large" type="error" class="ps-btn" @click="deleteSizeInfo" v-show="showRelked.cwi" style="position:absolute;top:282px;left:450px;">删除</Button>
            <Button size="large" type="primary" class="ps-btn" @click="commitSizeInfo" v-show="!showRelked.cwi" style="">保存</Button>
            <Button size="large" type="primary" ghost class="ps-btn" @click="cancelSizeInfo" v-show="!showRelked.cwi">取消</Button>
        </div>
    </div>
</template>

<script>
import {Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option} from 'view-design';
import {toRequest,fromResponse} from '../../../util/dataTypeConversion';
export default {
    components:{
        Input,RadioGroup,Radio,Icon,Button,Alert,Select,Option
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
        }
    },
    computed: {
        //尺码信息
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
        //尺码信息
        relkwd(newVal){
            if(newVal){
                this.nowShow=this.autoShow;
            }
        },
        nowShow(newVal){
            console.log(newVal+"nowShow changed");
            
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
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        if(this.$store.state.user.role=="顾客"){
            this.getSizeData();
        }
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
    margin:10px auto;
}
.ps-add-btn{
    position: absolute;
    left: 620px;
}
</style>