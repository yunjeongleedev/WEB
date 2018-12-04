var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// 소스코드 자동 줄바꿈
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'pug');
app.get('/topic/new', function (req, res) {
    res.render('new');
});
app.get(['/topic','/topic/:id'], function (req, res) {
    fs.readdir('data', function (err, files) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if(id){
        // id 값이 있을 때
        fs.readFile('data/' + id, 'utf8', function (err, data) {
            if (err) {
                // 콘솔창에서만 err메세지 띄워줌
                console.log(err);
                // 사용자에게 다음과 같은 메세지 띄워줌
                res.status(500).send('Internal Server Error');
            }
            res.render('view', { topics: files, title: id, description: data });
        })
    } else {
        // id 값이 없을 때
        res.render('view', { topics: files, title: 'Welcome', description: 'Hello, this page is about Javascript for Server.' });
    }
    })
});
// 라우트 2개: topic, id를 하나로 축약하고 주석처리
// app.get(['/topic:id'], function (req, res) {
//     var id = req.params.id;
//     fs.readdir('data', function(err, files){
//     if (err) {
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//     }
//     fs.readFile('data/' + id, 'utf8', function (err, data) {
//         if (err) {
//             // 콘솔창에서만 err메세지 띄워줌
//             console.log(err);
//             // 사용자에게 다음과 같은 메세지 띄워줌
//             res.status(500).send('Internal Server Error');
//         }
//         res.render('view', { topics: files, title: id, description: data });
//     })
// })
// });
app.post('/topic', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/' + title, description, function (err) {
        if (err) {
            // 콘솔창에서만 err메세지 띄워줌
            console.log(err);
            // 사용자에게 다음과 같은 메세지 띄워줌
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
})
app.listen(4000, function () {
    console.log('Connected, 4000 port!');
});