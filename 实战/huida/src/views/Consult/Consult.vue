<!-- 咨询页 -->
<template>
    <div class="container clearfix">
        <div class="stylist-list">
            <div class="sl-nav">
                <Tabs value="name1" style="marginTop:15px" :animated="false">
                    <TabPane label="推荐" name="name1">
                        <div class="slb-recommend"></div>
                    </TabPane>
                    <TabPane label="关注" name="name2">
                        <div class="slb-follow"></div>
                    </TabPane>
                    <TabPane label="分类" name="name3">
                        <div class="slb-sort">
                           <List :num="itemNum" v-slot:lists>
                               <ListItem></ListItem>
                               <ListItem></ListItem>
                           </List>
                        </div>
                        <div class="sort-list"></div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <div class="goods-banner"></div>
    </div>
</template>

<script>
import {Tabs,TabPane} from 'view-design'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
export default {
    components:{
        Tabs,TabPane,List,ListItem
    },
    data() {
        return {
            itemNum:0
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