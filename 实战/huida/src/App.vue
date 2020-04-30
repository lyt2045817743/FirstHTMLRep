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
    beforeCreate() {
      let user={};
        if(getCookie("username")){
          user.username=getCookie('username');
          if(getCookie('role')=="顾客"){
            this.$store.commit("changeIsStylist",false);
          }else if(getCookie('role')=="搭配师"){
            this.$store.commit("changeIsStylist",true);
          }
          user.role=getCookie('role');
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
