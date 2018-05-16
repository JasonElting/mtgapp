var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.get('/', function(req,res){
  res.send('hello world');
});
app.listen(80,function(){
    console.log('server started');
})
