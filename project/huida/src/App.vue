<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getCookie } from './util/cookie';
import {fromResponse} from './util/dataTypeConversion';
// import {initPath} from './util/views';
  export default {
    components:{
        
    },
    methods: {
      getUserInfo(){
        if(this.$store.state.user.role=="搭配师"){
          let url="/api/user/styliInfo/"+this.$store.state.user.uid;
            
            let _this=this;
            this.axios.get(url).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        let stylistInfo=fromResponse(res.data.data);
                        _this.$store.commit('setStylistInfo',stylistInfo);
                    }
                    else{
                        console.log(res.data.message);
                        console.log(url);
                    }
            })
        }
      },
      initPath(){
          //初始化路径
          if(JSON.parse(sessionStorage.getItem("pathSet"))){
            let pathSet=JSON.parse(sessionStorage.getItem("pathSet"));
            this.$store.commit("setPathSet",pathSet);
          }
          else{
            let pathSet={};
            pathSet.mainIndex="";
            pathSet.parentIndex="";
            pathSet.childIndex="";
            this.$store.commit("setPathSet",pathSet);
          }
      },
      initData(){
        let user={};
        //判断用户登录是否过期
        if(getCookie("token")){
            user.username=getCookie('username');
            user.uid=getCookie("uid");
            user.role=getCookie('role');

            if(getCookie('role')=="顾客"){
              this.$store.commit("changeIsStylist",false);
            }else if(getCookie('role')=="搭配师"){
              this.$store.commit("changeIsStylist",true);
            }
            this.$store.commit("setUser",user);
            //修改登录
            this.$store.commit("changeHasLogin",true);
            this.$store.commit("changeLogining",false);

            let _this=this;
              //发送请求获取用户个人信息
              this.axios.get("/api/user/"+this.$store.state.user.uid).then(function(res){
                  console.log(res.data);
                  
                  if(res.data.flag==true&&res.data.message=="查询成功"){
                      let data=res.data.data;

                      //转换res返回来的数据
                      let user={};
                      user=fromResponse(data);
                      
                      //初始化vuex中的数据
                      _this.$store.commit("setUser",user);

                      //标识用户身份
                      if(user.role=="搭配师"){
                        _this.$store.commit("changeIsStylist",true);
                      }
                  }
              })
        }
        else{
          this.$store.commit("changeHasLogin",false);
          
        }
      }
    },
    created() {
      this.initPath();
      this.initData();
      this.getUserInfo();
    }

  }
</script>

<style>
  body{
    background-color: #f7f7f7;
  }
  a{
    font-style: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav::after{
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #dcdee2;
  }
  .container{
      width: 1000px;
      margin: 0 auto;
  }
  .clearfix::after{
      content: "";
      display: block;
      clear: both;
  }
  /* 垂直水平居中 */
  .parent{
    position: relative;
  }
  .child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
