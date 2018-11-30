// app.js : 메인/엔트리 애플리케이션, 실행할 파일

// express: 로드한 express 모듈을 제어
var express = require('express');
var app = express();
// public 디렉토리 생성
// 정적으로 한다 = 한 번 만들어지면 언제나 똑같은 모습인 html
// 정적인 파일은 node로 reload하지 않아도 바로 변경됨
app.use(express.static('public'));
// get방식으로 접속한 사용자를 받기 위함, '/'은 홈
// get은 라우터, 나는 라우팅
app.get('/', function (req, res) {
    res.send('<h1>Hello home page</h1>');
});
app.get('/login', function (req, res) {
    res.send('Login Please.');
});
app.get('/penguin', function (req, res) {
    res.send('Hello Router, <img src="/penguin.jpg">');
});
// 동적으로 한다 = node로 reload 해야 바뀐다
app.get('/dynamic', function (req, res) {
    var lis = '';
    var time = Date();
    for (var i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>';
    }
    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        hello Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
});
app.listen(4000, function () {
    console.log('Connected 4000 port!');
});