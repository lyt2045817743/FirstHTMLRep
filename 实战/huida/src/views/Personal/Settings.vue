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
                    <div class="pi-value">
                        <Input v-model="userInfo.username" size="large" placeholder="large size" class="piv-item" readonly />
                        <Input v-model="userInfo.nickname" size="large" placeholder="large size" class="piv-item" />
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
                        <Input v-model="userInfo.age" size="large" placeholder="large size" class="piv-item" />
                        <Input size="large" placeholder="large size" class="piv-item" />
                        <Input v-model="userInfo.signature" type="textarea" :rows="4" placeholder="Enter something..." class="piv-item" style="width:500px;marginTop: 15px;"/>
                    </div>
                     <Button size="large" type="primary" class="pi-btn">修改</Button>
                </div>
            </TabPane>
            <TabPane label="帐号设置" name="name3">帐号设置</TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button} from 'view-design';
export default {
    components:{
        Tabs,TabPane,Input,RadioGroup,Radio,Icon,Button
    },
    data() {
        return {
            userInfo:{
                username:"lyt",
                nickname:"I'm fine",
                sex:"0",
                age:21,
                profession:"学生",
                signature:"什么也没留下..."
            },
            inputInfo:{

            },
        }
    },
    created() {

    },
    mounted() {

    },
    beforeCreate() {
        // this.axios.get("/user/"+this.$store.state.user.username).then(function(res){
        //     console.log(res.data);
            
        // })
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
    width: 100px;
    float: left;
    text-align: right;
}
.pi-name span{
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
}
.pi-value{
    width: 500px;
    float: left;
    margin-left: 20px;
    text-align: left;
}
.piv-item{
    width: 300px;
    margin-top: 10px;
}
.pi-btn{
    float: right;
    margin-right: 40px;
    margin-left: auto;
}
</style>