<template>
  <div id="app">
    <div id="nav">
      <Navigation class="container" />
      <div class="header_line"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import { getCookie } from './util/cookie';
  export default {
    components:{
        Navigation
    },
    methods: {
      getUserInfo(){
        if(this.$store.state.user.role=="搭配师"){
          let url="/api/user/styliInfo/"+this.$store.state.user.uid;
            
            let _this=this;
            this.axios.get(url).then(function(res){
                    console.log(res.data);
                    if(res.data.flag==true){
                        let stylistInfo=JSON.parse(res.data.data);
                        _this.$store.Stylist.commit('setStylistInfo',stylistInfo);
                    }
                    else{
                        console.log(res.data.message);
                        console.log(url);
                    }
            })
        }
      }
    },
    beforeCreate() {
      let user={};
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
          this.$store.commit("changeHasLogin",true);
        }
        else{
          this.$store.commit("changeHasLogin",false);
        }

      //修改isLogining的值
      var isLogining=JSON.parse(sessionStorage.getItem("isLogining"));
      if(isLogining){
        this.$store.commit("changeLogining",isLogining);
      }
    },

  }
</script>

<style>
  body{
    background-color: #f7f7f7;
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
</style>
