<!--  -->
<template>
    <div class="stylist-showPanel">
        <div class="ss-show">
            <div class="ss-title">展示部分</div>
            <div class="ss-box">
                <div class="spb-info">
                    <div class="info-item clearfix">
                        <span class="ii-name">职位</span><span class="ii-value">{{$store.state.stylistInfo.fullTime}}</span>
                    </div>
                    <div class="info-item clearfix">
                        <span class="ii-name">等级</span><span class="ii-value">{{$store.state.stylistInfo.styliLevel}}</span>

                    </div>
                    <div class="info-item clearfix">
                        <span style="float:left;width:65px;fontWeight:bold;textAlign:left">成交量</span><span style="float:left;width:50px;textAlign:left">{{$store.state.stylistInfo.deal}}</span>
                        <span style="float:left;width:70px;fontWeight:bold;textAlign:left">活跃度</span><span style="float:left;width:50px;textAlign:left">{{$store.state.stylistInfo.active}}</span>
                    </div>
                    <div class="info-item clearfix">
                        <span class="ii-name" style="width:50px">总评分</span>
                        <span class="ii-value" style="width:160px">
                            <Rate allow-half v-model="$store.state.stylistInfo.mark" disabled style="width:150px;">
                                <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                            </Rate>
                        </span>
                    </div>
                    <div class="info-item clearfix">
                        <span class="ii-name">服务态度评分</span>
                        <span class="ii-value" style=" width:138px;">
                            <Rate allow-half v-model="$store.state.stylistInfo.attiMark" disabled style="width:150px;">
                                <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                            </Rate>
                        </span>

                    </div>
                    <div class="info-item clearfix">
                        <span class="ii-name">搭配能力评分</span>
                            <span class="ii-value" style="width:138px;">
                            <Rate allow-half v-model="$store.state.stylistInfo.capaMark" disabled style="width:150px;">
                                <!-- <span style="color: #f5a623">{{ valueCustomText }}</span> -->
                            </Rate>
                        </span>
                    </div>
                </div>
                <div class="spb-price clearfix">
                    <span class="price-name">服务价格区间</span>
                    <div class="prive-value" style="display:inline-block">
                        <span style="width:50px;textAlign:center;display:inline-block;">{{$store.state.stylistInfo.servicePrice[0]}}</span>
                        <span class="unit">元</span>
                        <span>—</span>
                        <span style="width:50px;textAlign:center;display:inline-block;">{{$store.state.stylistInfo.servicePrice[1]}}</span>
                        <span class="unit">元</span>
                    </div>
                    
                </div>
                <div class="spb-comment" style="marginTop:12px;">
                    <div class="lately-comment clearfix">
                        <span class="lc-name">最近评价</span>
                        <p class="comment">{{$store.state.stylistInfo.lc.evalToS}}</p>
                    </div>
                    <div class="hot-comment clearfix">
                        <span class="hc-name">最热评价</span>
                        <p class="comment">{{$store.state.stylistInfo.hc.evalToS}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ss-set">
            <div class="ss-title">自我设置</div>
            <div class="ss-box clearfix">
                <div class="ssb-name" v-show="!pageInit">
                    <span>当前服务状态</span><br/>
                    <span style="marginTop:30px">服务开头语</span><br/>
                    <span style="marginTop:50px">我擅长的风格</span><br/>
                    <span style="marginTop:40px">我擅长的场合</span><br/>
                </div>
                <div class="ssb-value" v-show="!pageInit">
                    <RadioGroup v-model="newInfo.online" class="ssb-item" style="height:29px;">
                        <Radio label="在线">
                            <span>在线</span> 
                        </Radio>
                        <Radio label="可预约">
                            <span>可预约</span>
                        </Radio>
                        <Radio label="休息中">
                            <span>休息中</span>
                        </Radio>
                    </RadioGroup><br/>
                    <Input v-model="newInfo.greeting" type="textarea" :rows="2" placeholder="当顾客打开聊天框，系统就会自动发送的内容哦~" class="ssb-item" style="width:600px;height:65px;border:none;marginTop:18px" />
                    <div class="tags">
                        <CheckboxGroup v-model="newInfo.specSty" style="marginTop:11px;">
                            <Checkbox v-for="item in styleTags" :key="item.id" :label="item.tag" :value="item.id"></Checkbox>
                        </CheckboxGroup>
                    </div>
                    <div class="tags">
                        <CheckboxGroup v-model="newInfo.specOcc" style="marginTop:40px;">
                            <Checkbox v-for="item in occasionTags" :key="item.id" :label="item.tag" :value="item.id"></Checkbox>
                        </CheckboxGroup>
                    </div>
                </div>

                <div class="ssb-show clearfix" v-show="pageInit">
                    <div class="title2-box clearfix">
                        <span class="title2">当前服务状态</span>
                        <span class="show-cont" style="height:29px;">{{$store.state.stylistInfo.online}}</span>
                    </div>
                    <div class="title2-box clearfix">
                        <span class="title2" style="">服务开头语</span>
                        <p class="show-cont" style="">{{$store.state.stylistInfo.greeting}}</p>
                    </div>
                    <div class="title2-box clearfix">
                        <span  class="title2" style="">我擅长的风格</span>
                        <div class="show-cont">
                            <span v-for="item in $store.state.stylistInfo.specStyTags" :key="item.id">{{item.tag}}</span>
                        </div>
                    </div>
                    <div class="title2-box clearfix">
                        <span class="title2" style="">我擅长的场合</span>
                        <div class="show-cont">
                            <span v-for="item in $store.state.stylistInfo.specOccTags" :key="item.id">{{item.tag}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ss-btn">
            <Button size="large" type="primary" class="ps-btn" @click="commitShowInfo" style="position:relative;top:-210px;left: 250px;" v-show="!pageInit">保存</Button>
            <Button size="large" type="primary" class="ps-btn" @click="modiShowInfo" style="position:relative;top:-200px;left: 250px;" v-show="pageInit">修改</Button>
            <Button size="large" type="primary" ghost class="ps-btn"  @click="cancelModify" v-show="!pageInit" style="position: relative;top: -210px;left: 290px;">取消</Button>
        </div>
    </div>
</template>

<script>
import {Input,RadioGroup,Radio,Button,Rate,CheckboxGroup,Checkbox} from 'view-design';
import {toStr, toNumber} from '../../../util/arrayContent';
import { toRequest ,fromResponse} from '../../../util/dataTypeConversion';
export default {
    components:{
        Input,RadioGroup,Radio,Button,Rate,CheckboxGroup,Checkbox
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
        pageInit:true,
        styleTags:[],
        occasionTags:[],
        newInfo:{
            online:"1",
            greeting:"",
            specSty:[],
            specOcc:[]
        },
        showInfo:{
            online:"1",
            greeting:"",
            specSty:[],
            specOcc:[]
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
        getShowPanelInfo(){
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

                        }
                    }
                    else{
                        _this.errorMessage['尺码信息']=res.data.message;
                        console.log(res.data.message);
                    }
            })
        },
        commitShowInfo(){
            let url="/api/user/styliInfo/"+this.$store.state.user.uid;
            let params={...this.newInfo};
            params.specSty=toNumber(params.specSty,this.styleTags);
            params.specOcc=toNumber(params.specOcc,this.occasionTags);
            params=toRequest(params);
            params=JSON.stringify(params);
            console.log(params);
            
            let _this=this;
            this.axios.put(url,params).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        //根据res返回结果更新vuex中数据
                        let stylistInfo=fromResponse(res.data.data);
                        _this.$store.commit('setStylistInfo',stylistInfo);
                        //改变显示状态
                        _this.pageInit=true;
                    }
                    else{
                        console.log(res.data.message);
                        console.log(url);
                        console.log(params);
                        
                    }
            })
        },
        modiShowInfo(){
            this.newInfo={
                online:this.$store.state.stylistInfo.online,
                greeting:this.$store.state.stylistInfo.greeting,
                specSty:[],
                specOcc:[]
            }
            this.newInfo.specSty=toStr(this.$store.state.stylistInfo.specStyTags);
            this.newInfo.specOcc=toStr(this.$store.state.stylistInfo.specOccTags);
            this.pageInit=false;
        },
        cancelModify(){
            this.pageInit=true;
        }
    
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    if(this.$store.state.user.role=="搭配师"){
        
        this.getShowPanelInfo();
    }
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
.stylist-showPanel{
    margin: 0 auto;
    padding: 0 20px 20px;
    background-color: white;
}
.stylist-showPanel{
    height: 800px;
}

.ss-title{
    height: 45px;
    margin-top: 10px;
    border-bottom: 1px solid #999;
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    font-weight: bold;
}

.inline-box{
    margin: 14px 0;
}
.unit{
    margin-left: 5px;
    margin-right: 20px;
}
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
    margin-top: 3px;
    padding: 9px;
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
.ssb-value{
    width: 630px;
    float: right;
    text-align: left;
}
.ssb-item{
    margin-top:18px;
}
.show-cont{
    width: 630px;
    float: right;
    text-align: left;
    font-size: 15px;
    color: #999;
}
.show-cont span{
    margin-right: 20px;
}
.title2{
    float: left;
    text-align: left;
    font-weight: bold;
    color: black;
}
.ssb-show span{
    display: inline-block;
}
.ssb-show{
    width: 100%;
}
.ssb-show p{
    /* margin-top: 30px; */
}
.title2-box{
    margin-top: 30px;
}
</style>