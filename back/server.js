var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// 中间导入包，在use模块
var filmRouter = require('./router/film')
var loginRouter = require('./router/login')
var cinemasRouter = require('./router/cinemas')
var buyRouter = require('./router/buy')
var findoneRouter = require('./router/findone')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/api/film/',filmRouter);
app.use('/api/user/',loginRouter);
app.use('/api/cinemas/',cinemasRouter);
app.use('/api/buy/',buyRouter);
app.use('/api/find/',findoneRouter);



app.listen(3000,function(){
    console.log('您好，服务已经开启了');
})