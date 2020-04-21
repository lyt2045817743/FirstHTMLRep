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
  export default {
    components:{
        Navigation
    },
    beforeCreate() {
      if(sessionStorage.getItem("userInfo")){
        var userInfo=JSON.parse(sessionStorage.getItem("userInfo"));
      }
        var isLogining=JSON.parse(sessionStorage.getItem("isLogining"));
        if(isLogining){
          this.$store.commit("changeLogining",isLogining);
        }
        this.$store.commit("setUser",userInfo);
    },

  }
</script>

<style>
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
