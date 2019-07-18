const http = require('http'); //引包
//创建服务器
/*
    request  请求  客户端请求
    response 响应  发送给客户端
*/
//创建服务
const app = http.createServer((request,response)=>{
    console.log(1);
    //发送给客户端
    response.write("{code:1,msg:'abc'}");
    //结束发送
    response.end();
});
//80监听
app.listen(80);