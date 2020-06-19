<!-- 发帖 -->
<template>
<div>
    <div id="nav">
        <div class="nav-box container clearfix">
            <div class="logo">
                <router-link to="/"><img src="../../assets/img/logo.png" alt=""></router-link>
            </div>
            <span class="text-secondary">写帖子</span>
            <div class="submit">
                <Button size="large" type="primary" ghost class="submit-btn">存草稿</Button>
                <Button size="large" type="primary" class="submit-btn" style="marginLeft:20px" @click="submitForm">发布帖子</Button>
            </div>
        </div>
        <div class="header_line"></div>
    </div>
    <div class="writer-form container">
         <Input v-model="writerForm.title" size="large" placeholder="请输入标题" style="width: 100%;" />
        <quillEditor  v-model="content"> </quillEditor>
    </div>
</div>
</template>

<script>
import {Button,Input} from 'view-design';
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
// import * as Quill from 'quill'; // 富文本基于quill
export default {
    components:{
        quillEditor,Button,Input
    },
data() {
return {
    // 富文本编辑器部分
    // editor: null,   // 富文本编辑器对象
    content: `<p></p><p><br></p><ol></ol>`, // 富文本编辑器默认内容
    editorOption: { //  富文本编辑器配置
        modules: {
            toolbar: '#toolbar'
        },
        theme: 'snow',
        placeholder: '请输入正文'
    },

    writerForm:{
        uid:"",
        title:"",
        images:"",
        content:"",
        cata:"",
        scope:"",
    }
}
},
methods:{
    submitForm(){
        console.log(this.content)
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.logo{
    float: left;
    height: 60px;
}
.logo img{
    width: 100px;
    height: 60px;
    background-color: white;
}
.text-secondary{
    color: #6c757d;
    display: inline-block;
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
}
.submit{
    margin-top: 10px;
    float: right;
}

.writer-form{
    padding:20px 0;
}
</style>