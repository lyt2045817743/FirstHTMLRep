<!--  -->
<template>
    <div>
        <div class="home-bg">
            <div class="banners container">
                <div id="banner-img1" class="banner-img"></div>
                <!-- <div id="banner-img2" class="banner-img"></div>
                <div id="banner-img3" class="banner-img"></div> -->
            </div>
        </div>
        <div class="recommendations container">
            <div class="consult-recommend"></div>
            <div class="goods-recommend"></div>
            <div class="shop-recommend"></div>
            <div class="forum-recommend"></div>
        </div>
    </div>
</template>

<script>
    // import {Carousel,CarouselItem} from 'view-design'
    export default {
        components:{
            
        },
        data() {
        return {
        }
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .home-bg{
        width: 100%;
        height: 360px;
        margin-top:70px;
        background-image: url('../../assets/img/banner3.jpg');
        background-position: center top;
        background-repeat: no-repeat;
    }
    .banners{
        height: 300px;
    }
    .banner-img{
        width: 100%;
        height: 360px;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: 100% 100%; 
    }
</style>