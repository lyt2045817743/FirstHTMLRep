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
                                   <CheckboxGroup v-model="border">
                                       <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                                        <Checkbox label="香蕉" border></Checkbox>
                                        <Checkbox label="苹果" border></Checkbox>
                                        <Checkbox label="西瓜" border></Checkbox>
                                    </CheckboxGroup>
                               </div>
                               <div class="ssb-line"></div>
                               <div class="ssb-line"></div>
                               <div class="ssb-line"></div>
                               <div class="ssb-line"></div>
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
import {Tabs,TabPane,CheckboxGroup,Checkbox} from 'view-design'
export default {
    components:{
        Tabs,TabPane,CheckboxGroup,Checkbox
    },
    data() {
        return {
            itemNum:0,
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜']
        }
    },
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange (data) {
            if (data.length === 3) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
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