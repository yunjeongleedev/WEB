// node.js가 제공하는 모듈 중 http를 http 변수에 저장
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;
// http 객체가 갖는 createServer 함수 호출
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var server = http.createServer(function(req, res));
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});