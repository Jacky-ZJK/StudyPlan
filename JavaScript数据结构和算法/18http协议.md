```js
//请求行：方法 路径 协议
POST /images/home/navlist/11.jpg HTTP/1.1
//请求头部分
Host: localhost  
Content-type: application/x-www-form-urlencode
Content-length: 10 
//请求体部分，需用空格隔开
name=nihao

//响应行：协议 状态码 状态信息
HTTP/1.1 200 OK
//响应头部分
Content-type: text/html
Content-length: 5

hello
```