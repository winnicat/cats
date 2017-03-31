//创建Node.js应用
//step1: 引入required模块
var http = require("http");

//step2: 创建服务器
//通过request response来接受和响应数据
http.createServer(function (request, response) {
  //发送HTTP头部
  //HTTP 状态值： 200：ok
  //内容类型: text/plain

  response.writeHead(200, {'Content-Type': 'text/plain'});

  //发送响应数据“Hello World”
  response.end('Hello World\n');
}).listen(8888); //listen方法绑定8888端口

console.log('Server running at http:127.0.0.1:8888/');