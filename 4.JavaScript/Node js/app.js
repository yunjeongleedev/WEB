// app.js : 메인/엔트리 애플리케이션, 실행할 파일

// express: 로드한 express 모듈을 제어
var express = require("express");
var app = express();
app.listen(4000, function(){
    console.log('Connected 4000 port!');
});