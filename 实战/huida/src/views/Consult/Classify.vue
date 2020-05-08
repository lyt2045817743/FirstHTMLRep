<!-- 咨询--分类页 -->
<template>
    <div>
        <div class="slb-sort">
            <div class="ss-box">
                <div class="ssb-line">
                    <RadioGroup v-model="sOrder" type="button" size="small" class="classify clearfix">
                        <Radio label="全部排序" class="check-all"></Radio>
                        <div class="classify-box">
                            <Radio v-for="item in allData[0]" :key="item" :label="item" class="check-single"></Radio>
                        </div>
                    </RadioGroup>
                </div>
                <div class="ssb-line">
                    <RadioGroup v-model="sGrade" type="button" size="small" class="classify clearfix">
                        <Radio label="全部等级" class="check-all"></Radio>
                        <div class="classify-box">
                            <Radio v-for="item in allData[1]" :key="item" :label="item" class="check-single"></Radio>
                        </div>
                    </RadioGroup>
                </div>
                <div class="ssb-line">
                    <RadioGroup v-model="specSty" type="button" size="small" class="classify clearfix">
                        <Radio label="全部风格" class="check-all"></Radio>
                        <div class="classify-box">
                            <Radio v-for="item in styleTags" :key="item.id" :label="item.tag" class="check-single"></Radio>
                        </div>
                    </RadioGroup>
                </div>
                <div class="ssb-line">
                    <RadioGroup v-model="specOcc" type="button" size="small" class="classify clearfix">
                        <Radio label="全部场合" class="check-all"></Radio>
                        <div class="classify-box">
                            <Radio v-for="item in occasionTags" :key="item.id" :label="item.tag"  class="check-single"></Radio>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
        <div class="sort-list">
            <Card class="sl-item" v-for="item in stylistList" :key="item.id" :padding="0" style="width:237px;display:inline-block;marginTop:19px;">
                <div style="text-align:left">
                    <div class="info-header">
                        <div class="ih-item clearfix">
                            <div class="left">
                                <img :src="item.headPic" alt="">
                            </div>
                            <div class="right">
                                <span style="fontSize:20px;color:#007a8a">{{item.nickname}}</span><br/>
                                <Icon v-if="item.sex=='女'" style="marginRight:20px;color:pink;fontWeight:bold" type="ios-female" />
                                <Icon v-if="item.sex=='男'" style="marginRight:20px;color:blue;fontWeight:bold" type="ios-male" />
                                <span>{{item.age}}</span><br/>
                                <Icon type="md-wine" style="color:#007a8a"/>
                                <span style="position:relative;color:#007a8a">{{item.styliLevel}}</span>
                            </div>
                        </div>
                        <div class="ih-item center clearfix">
                            <div class="left">
                                <span>粉丝</span><br/>
                                <span class="info">{{item.mineFans}}</span>
                            </div>
                            <div style="width:1px;height:31px;marginTop:5px;float:left;marginLeft: 13px;borderRight:[0.5px,solid,#999]"></div>
                            <div class="right">
                                <span>成交量</span><br/>
                                <span class="info">{{item.mineDeal}}</span>
                            </div>
                        </div>
                        <div class="ih-item center clearfix">
                                <span style=";marginRight:20px">客户评分：</span>
                                    <Rate allow-half disabled v-model="item.mark" style="font-size:15px;letterSpacing:-5px"/>
                        </div>
                        <div class="center clearfix">
                            <div class="left">
                                <span style="fontSize:20px;color:#007a8a">{{item.servicePrice[0]}}￥-{{item.servicePrice[1]}}￥</span>
                            </div>
                            <div class="right" style="height:29px;lineHeight: 29px;">
                                <a href="javascript:void(0)">个人资料 ></a>
                            </div>
                        </div>
                    </div>
                    <div class="info-footer">
                        <p style="fontSize:12px">
                            “{{item.signature}}”
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import {RadioGroup,Radio,Rate,Card,Icon} from 'view-design';
import { toRequest, fromResponse } from '../../util/dataTypeConversion';
import { toOneNumber } from '../../util/arrayContent';
export default{
    components:{
        RadioGroup,Radio,Rate,Card,Icon
    },
    data() {
    return {
        itemNum:0,
        allData:[['最热', '好评','最近活跃'],['初级','一级','二级','三级','四级','五级']],
        pageNum:1,
        reqData:{},
        stylistList:[],
        //类别名及其值
        sOrder:"全部排序",
        sGrade:"全部等级",
        specSty:"全部风格",
        specOcc:"全部场合",
        //3tags数组
        occasionTags:[],
        styleTags:[],
    }
},
watch: {
    sOrder(newVal){
        this.showData("sOrder",newVal);
    },
    sGrade(newVal){
        this.showData("sGrade",newVal);
    },
    specSty(newVal){
        this.showData("specSty",newVal);
    },
    specOcc(newVal){
        this.showData("specOcc",newVal);
    }
},
methods: {
    initData(){
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
        //axios请求全部搭配师列表
        url="/api/user/styliInfo/"+1+"/"+6;
        
        this.axios.get(url).then(function(res){
                console.log(res.data);
                if(res.data.flag==true){
                    let newData=[];
                    let data=res.data.data.list;
                    for(let i=0;i<data.length;i++){
                        newData.push(fromResponse(data[i]))
                    }
                    _this.stylistList=newData;
                    console.log(_this.stylistList);
                    
                }
                else{
                    console.log(res.data.message);
                    console.log(url);
                }
        })
    },
    //请求某一类搭配师列表：当监测到四个类别中的值发生变化时，调用此函数发送请求获取数据
    showData(classifyName,classifyValue){
        //处理请求参数
        if(classifyValue.indexOf('全部')==-1){
            switch(classifyName){
                case "sOrder":this.reqData.sOrder=classifyValue;break;
                case "sGrade":this.reqData={...this.reqData,...toRequest({sGrade:classifyValue})};break;
                case "specSty":this.reqData.specSty=toOneNumber(classifyValue,this.styleTags);break;
                case "specOcc":this.reqData.specOcc=toOneNumber(classifyValue,this.occasionTags);break;
            }
        }
        else{
            switch(classifyName){
                case "sOrder":delete this.reqData.sOrder;break;
                case "sGrade":delete this.reqData.sGrade;break;
                case "specSty":delete this.reqData.specSty;break;
                case "specOcc":delete this.reqData.specOcc;break;
            }
        }
        // let params=JSON.stringify(reqData);
        this.sendAxios(this.pageNum,10);
        
    },
    sendAxios(pageNum,dataNum){
        //axios请求某一类搭配师列表
        let params=this.qs.stringify(this.reqData);
        console.log(params);
        
        let url="/api/user/styliInfo/"+pageNum+"/"+dataNum+"?"+params;
        console.log(url);
        
        let _this=this;
        this.axios.get(url,params).then(function(res){
                console.log(res.data);
                if(res.data.flag==true){
                    console.log("yeah!");
                    let newData=[];
                    let data=res.data.data.list;
                    for(let i=0;i<data.length;i++){
                        newData.push(fromResponse(data[i]))
                    }
                    _this.stylistList=newData;
                }
                else{
                    console.log(res.data.message);
                    console.log(url);
                    console.log(params);
                }
        })
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
    this.initData();
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.ss-box{
    background-color: #E5EDEF;
    text-align: left;
    padding: 10px 20px 15px;
}
.check-all{
    width: 85px;
    /* display: inline-block; */
    float: left;
}
.check-single{
    margin-right: 15px;
}
.classify-box{
    width: 610px;
    float: left;
    margin-left: 15px;
}
/* .check-group{
    width: 600px;
    display: inline-block;
    text-align: left;
} */
.ssb-line{
    margin-top: 5px;
}
.ih-item{
    margin-bottom: 10px;
}
.info-header{
    padding: 10px;
    background-color: #E5EDEF;
}


.sl-item:nth-child(3n+2){
    margin: 0 19px;
}
.sort-list{
    text-align: left;
}
.left{
    width: 95px;
    float:left;
}
.left img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-top: 3px;
    border-radius: 50%;
}
.right{
    width: 95px;
    float: right;
}
.center{
    text-align: center;
}
.info{
    color: #999;
}
.info-footer{
    padding: 10px;
    /* height: 50px; */
}
</style>