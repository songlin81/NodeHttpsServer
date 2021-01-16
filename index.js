var express = require("express");
var app = express();
var fs = require('fs');
var path = require('path');

var key = fs.readFileSync('./pem/private.key');
var cert = fs.readFileSync('./pem/mydomain.crt');
var options = {
    key: key,
    cert: cert
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var userRouter = require('./routes/user'); 
app.use('/user', userRouter);
app.use('/', userRouter);

var https = require('https');
https.createServer(options, app).listen(8889); 