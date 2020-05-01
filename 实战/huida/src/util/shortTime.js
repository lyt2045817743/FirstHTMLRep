let successMsg=[
    "查询成功",
     "添加成功!",
     "删除成功！",
     "更新成功！",
     "上传成功",
     "点赞成功!",
     "收藏成功!",
     "登录成功",
      "注册成功",

];
let errMsg=[
    "未知错误, 请联系管理人员",
    "查询失败",
    "添加失败!",
    "删除失败！",
    "更新失败！",
    "下载失败",
    "用户名已存在",
    "用户名或密码为空",
    "密码错误",
    "新、旧密码相同",
    "用户名不存在",
    "无token，请在header中携带",
    "token已失效，请重新登录",
];
export function judgeStatus(meg){
      let url="/api";
      let params=JSON.stringify({});
      console.log(params);
      
      let _this=this;
      this.axios.methods(url,params).then(function(res){
            console.log(res.data);
            if(res.data.flag==true){

            }
            else{

            }
      })
}
