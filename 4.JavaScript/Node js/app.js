// app.js : 메인/엔트리 애플리케이션, 실행할 파일

// express: 로드한 express 모듈을 제어
var express = require('express');
var app = express();
// public 디렉토리 생성
app.use(express.static('public'));
// get방식으로 접속한 사용자를 받기 위함, '/'은 홈
// get은 라우터, 나는 라우팅
app.get('/', function(req, res){
    res.send('<h1>Hello home page</h1>');
});
app.get('/login', function(req, res){
    res.send('Login Please.');
});
app.get('/penguin', function(req, res){
    res.send('Hello Router, <img src="/penguin.jpg">');
});
app.listen(4000, function(){
    console.log('Connected 4000 port!');
});