var express = require('express');
var app=express();
var bodyparser = require('body-parser');
var con=require('./routers/Connection')
//
app.use(bodyparser.json());

var Signup=require('./routers/sign_upR')
app.use('/Signup',Signup)

app.listen(2000);
console.log("run on 2000");
