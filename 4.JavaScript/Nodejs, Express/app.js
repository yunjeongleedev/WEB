// app.js : 메인/엔트리 애플리케이션, 실행할 파일

// express: 로드한 express 모듈을 제어
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
// public 디렉토리 생성
// 정적으로 한다 = 한 번 만들어지면 언제나 똑같은 모습인 html
// 정적인 파일은 node로 reload하지 않아도 바로 변경됨
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/views', function (req, res) {
    res.render('temp', { time: Date(), _title: 'pug tutorial' });
});
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
// query 객체의 사용법 ex) localhost:4000/topic?id=1
// id는 property
app.get('/query', function (req, res) {
    var topics = [
        'Javascript is....',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href="/topic?id=0">JavaScript</a><br>
        <a href="/topic?id=1">Nodejs</a><br>
        <a href="/topic?id=2">Express</a><br><br>
        ${topics[req.query.id]}
    `
    res.send(output);
});
// semantic url
app.get('/semantic/:id', function (req, res) {
    var topics = [
        'Javascript is....',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href="/semantic/0">JavaScript</a><br>
        <a href="/semantic/1">Nodejs</a><br>
        <a href="/semantic/2">Express</a><br><br>
        ${topics[req.params.id]}
    `
    res.send(output);
});
app.get('/form', function (req, res) {
    res.render('form');
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
app.get('/form', function (req, res) {
    res.render('form');
});
app.get('/form_receiver', function (req, res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title + ',' + description);
});
app.post('/form_receiver', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});