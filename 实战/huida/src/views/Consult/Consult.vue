<!-- 咨询页 -->
<template>
    <div class="container clearfix">
        <div class="stylist-list">
            <div class="sl-nav">
                <Tabs value="name1" style="marginTop:15px" :animated="false">
                    <TabPane label="推荐" name="name1">推荐</TabPane>
                    <TabPane label="关注" name="name2">关注</TabPane>
                    <TabPane label="分类" name="name3">
                        <div class="sln-sort">
                            
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <div class="goods-banner"></div>
    </div>
</template>

<script>
import {Tabs,TabPane} from 'view-design'
export default {
    components:{
        Tabs,TabPane
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
.stylist-list{
    width: 750px;
    height: 440px;
    background-color: antiquewhite;
    float: left;
}
.goods-banner{
    width: 230px;
    height: 440px;
    background-color: antiquewhite;
    float: right;
}
</style>