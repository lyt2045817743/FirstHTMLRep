<template>
  <div class="home">
    <div class="banner_img"></div>
    <div class="platfrom_feature container">
      <div class="pf_block clearfix">
        <div class="pf_brief">
            <div class="icon_bg">
                <Icon class="pb_icon" type="ios-chatbubbles-outline" color="white" size="40"/>
            </div>
            <h3>一对一咨询服务</h3>
        </div>
        <div class="pf_show clearfix">
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/consult2.jpg">
                  <h3>个性化服饰推荐</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/consult3.jpg">
                  <h3>一对一深入交流</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/consult1.jpg">
                  <h3>大众化搭配咨询</h3>
              </div>
          </Card>
        </div>
      </div>
      <div class="pf_block clearfix">
        <div class="pf_brief">
        
            <div class="icon_bg">
                <Icon type="md-cart" class="pb_icon" color="white" size="40"/>
            </div>
            <h3>同城商品放心选</h3>
        </div>
        <div class="pf_show clearfix">
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/goods3.jpg">
                  <h3>同城礼服租借，解决急需</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/goods2.jpg">
                  <h3>实地考察，购买更放心</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/goods4.jpg">
                  <h3>同城物流，快速送达</h3>
              </div>
          </Card>
        </div>
      </div>
      <div class="pf_block clearfix">
        <div class="pf_brief">
            <div class="icon_bg">
                <Icon type="ios-people" class="pb_icon" color="white" size="40"/>
            </div>
            <h3>论坛发布搭配需求</h3>
        </div> 
        <div class="pf_show clearfix">
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/forum2.jpg">
                  <h3>教你驾驭各种风格</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/forum3.jpg">
                  <h3>发帖求助已有衣物搭配</h3>
              </div>
          </Card>
          <Card style="width:225px" class="pf_card">
              <div style="text-align:center">
                  <img src="../assets/img/forum1.jpg">
                  <h3>流行款式一览无余</h3>
              </div>
          </Card>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import {Icon,Card} from 'view-design';
  export default {
    name: 'Home',
    components: {
      Icon,Card
    }
  }
</script>

<style scoped>
  .banner_img{
    width: 100%;
    height: 360px;
    margin-top:70px;
    background-image: url('../assets/img/banner3.jpg');
    background-position: center top;
    background-repeat: no-repeat;
  }
  .pf_brief{
      width: 150px;
      height: 150px;
      float: left;
      text-align: center;
      margin-top: 130px;
  }
  .icon_bg{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #007a8a;
      position: relative;
      margin: 0 auto;
  }
  .pb_icon{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }

  .pf_block h3,p:first-child{
      margin-top: 10px;
      color: #007a8a;
  }
  .pf_block p{
      color: #007a8a;
      font-size: 11px;
  }

  /*pf_show start*/
  .pf_show{
    width: 750px;
    height: 243px;
    float: right;
    margin-top: 85px;
  }
  .pf_show img{
    width: 100%;
    height: 144px;
    display: inline-block;
  }
  .pf_show .pf_card{
    width: 200px;
    /* height: 150px; */
    float: right;
  }
  .pf_show .pf_card:nth-child(2){
    margin: 0 35px;
  }
  .pf_show .pf_card div{
    height: 100%;
  }
  /*pf_show end*/
</style>