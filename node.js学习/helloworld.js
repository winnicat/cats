// JavaScript Document
//console.log("Hello World");
//加载了一个http模块
var http = require('http')
//创建服务器
var server = http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('Hello World\n')
})
//监听端口
server.listen(1337, '127.0.0.1')

console.log('Sercer runnint at http://127.0.0.1:1337/')