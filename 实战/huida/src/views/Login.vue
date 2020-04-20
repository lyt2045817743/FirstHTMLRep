<!-- 登录注册页 -->
<template>
    <div class="login_register">
        <div class="lr_bg">
        </div>
        <div class="lr_container clearfix">
            <div class="lr_box">
                <div class="lr_nav">
                    <Tabs value="name1" class="lrn_tabs" style="width: 300px">
                        <TabPane label="登录" name="name1">
                            <Input v-model="tel" placeholder="请输入手机号" style="width: 297px"/><br/>
                            <Input v-model="veriCode" placeholder="请输入验证码" style="width: 192px"/><Button type="default">获取验证码</Button>
                        </TabPane>
                        <TabPane label="注册" name="name2">
                            这是注册的内容
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Tabs,TabPane,Input,Button} from 'view-design';
export default {
    components: {
        Tabs,TabPane,Input,Button
    },
    data() {
    return {
        tel:'',
        veriCode:''
    }
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
.login_register{
    position: relative;
}
.lr_container{
    width: 1130px;
    margin: -418px auto 0;
}
.lr_bg{
    width: 100%;
    height: 460px;
    margin: 50px auto 0;
    background-image: url('../assets/img/login_bg.jpg');
    background-repeat: no-repeat;
    background-position: center top;
}
.lr_container .lr_box{
    width: 415px;
    height: 385px;
    float: right;
    z-index: 1;
    border: 1px solid #999;
    background-color: white;
}
.lrn_tabs{
    margin: 50px auto 0;
    font-size:25px;
}
</style>