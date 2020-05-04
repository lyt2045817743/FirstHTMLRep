<!--  -->
<template>
    <div class="stylist-showPanel">
        <div class="ss-show">
            <div class="ss-title">展示部分</div>
            <div class="ss-box">
                <div class="spb-info">
                    <div class="info-item clearfix">
                        <span class="ii-name">职位</span><span class="ii-value">{{this.$store.state.stylistInfo.fullTime}}</span>
                    </div>
                    <div class="info-item clearfix">
                        <span class="ii-name">等级</span><span class="ii-value">{{$store.state.stylistInfo.fullTime}}</span>

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
                <Button size="large" type="primary" class="ps-btn" style="position:relative;left:-120px;">保存</Button>
            <Button size="large" type="primary" ghost class="ps-btn" >重置</Button>
            </div>
        </div>
        <div class="ss-btn">

        </div>
    </div>
</template>

<script>
import {Input,RadioGroup,Radio,Button,Rate} from 'view-design';
export default {
    components:{
        Input,RadioGroup,Radio,Button,Rate
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
    //展示板
    getShowPanelInfo(){
        
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
</style>