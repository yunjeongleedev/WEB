var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// 소스코드 자동 줄바꿈
app.locals.pretty = true
app.set('views', './views_file')
app.set('view engine', 'pug')
app.get('/topic/new', function(req, res){
    res.render('new')
})
app.post('/topic', function(req, res){
    var title = req.body.title
    var description = req.body.description
    fs.writeFile('dataa/'+title, description, function(err){
        if(err){
            // 콘솔창에서만 err메세지 띄워줌
            console.log(err)
            // 사용자에게 다음과 같은 메세지 띄워줌
            res.status(500).send('Internal Server Error')
        }
        res.send(req.body.title+','+req.body.description)
    })
})
app.listen(4000, function(){
    console.log('Connected, 4000 port!')
})