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
                            <div class="ss-box">
                                <div class="ssb-line">
                                   <RadioGroup v-model="checkGroup" type="button" size="large">
                                        <Radio label="全部排序" class="check-all"></Radio>
                                        <Radio v-for="item in allData[0]" :key="item" :label="item"></Radio>
                                    </RadioGroup>
                                </div>
                                <div class="ssb-line">
                                    <RadioGroup v-model="checkGroup" type="button" size="large">
                                        <Radio label="全部价位" class="check-all"></Radio>
                                        <Radio v-for="item in allData[1]" :key="item" :label="item"></Radio>
                                    </RadioGroup>
                                </div>
                                <div class="ssb-line">
                                    <RadioGroup v-model="checkGroup" type="button" size="large">
                                        <Radio label="全部等级" class="check-all"></Radio>
                                        <Radio v-for="item in allData[2]" :key="item" :label="item"></Radio>
                                    </RadioGroup>
                                </div>
                                <div class="ssb-line">
                                    <RadioGroup v-model="checkGroup" type="button" size="large">
                                        <Radio label="全部风格" class="check-all"></Radio>
                                        <Radio v-for="item in styleTags" :key="item" :label="item.tag"></Radio>
                                    </RadioGroup>
                                </div>
                                <div class="ssb-line">
                                    <RadioGroup v-model="checkGroup" type="button" size="large">
                                        <Radio label="全部场合" class="check-all"></Radio>
                                        <Radio v-for="item in occasionTags" :key="item" :label="item.tag"></Radio>
                                    </RadioGroup>
                                </div>
                           </div>
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
import {Tabs,TabPane,RadioGroup,Radio} from 'view-design'
export default {
    components:{
        Tabs,TabPane,RadioGroup,Radio
    },
    data() {
        return {
            itemNum:0,
            allData:[['最热', '好评','最近活跃'],['一级','二级','三级','四级','五级'],['日常装','约会装','职场装'],['嘻哈风','英伦风','欧美风','百搭','淑女','lolita']],
            checkGroup: [],
            occasionTags:
             [
                {
                        id: 4,
                        tag: "日常装",
                        tagCateId: 2,
                        tagCateName: "场合"
                },
                {
                        id: 5,
                        tag: "约会装",
                        tagCateId: 2,
                        tagCateName: "场合"
                },
                {
                        id: 6,
                        tag: "职场装",
                        tagCateId: 2,
                        tagCateName: "场合"
                },
             ],
            styleTags:
             [
                    {
                           id: 1,
                           tag: "嘻哈风",
                           tagCateId: 1,
                           tagCateName: "风格"
                    },
                    {
                           id: 2,
                           tag: "英伦风",
                           tagCateId: 1,
                           tagCateName: "风格"
                    },
                    {
                           id: 3,
                           tag: "欧美风",
                           tagCateId: 1,
                           tagCateName: "风格"
                    },
                    {
                           id: 10,
                           tag: "百搭",
                           tagCateId: 1,
                           tagCateName: "风格"
                    },
                    {
                           id: 11,
                           tag: "淑女",
                           tagCateId: 1,
                           tagCateName: "风格"
                    },
                    {
                           id: 13,
                           tag: "lolita",
                           tagCateId: 1,
                           tagCateName: "风格"
                    }
             ],
        }
    },
    methods: {
        
    },
    watch: {
        
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
    float: left;
}
.goods-banner{
    width: 230px;
    height: 440px;
    background-color: antiquewhite;
    float: right;
}
.check-all{
    width: 85px;
    display: inline-block;
}
.check-group{
    width: 600px;
    display: inline-block;
    text-align: left;
}
.ssb-line{
    margin-top: 5px;
}
</style>