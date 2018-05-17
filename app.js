var port = process.env.PORT || 3000 ;
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')

var app = express();


//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	
  res.render('index.ejs', {
  	title: 'Hypergeometric calculator',
  });

});

app.post('/list', function(req,res){
	var list=req.body.list;
	res.render('list.ejs',{
		data:list
	})

})
app.get('/list', function(req,res){
	var list=req.body.list;
	res.render('list.ejs',{
		data:list
	})

})

app.listen(port,function(){
  console.log('server start');
})














//     http = require('http'),
//     fs = require('fs');

// var app = http.createServer(function (req, res) {
//   if (req.url.indexOf('/js') != -1) {//checks for java script and runs it
//     var filePath = req.url.split('/js')[1];
//     fs.readFile(__dirname + '/public/js' + filePath, function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//       }
//       res.end();
//     });
//   } else if(req.url.indexOf('/css') != -1) { //checks for css and runs it
//     var filePath = req.url.split('/css')[1];
//     fs.readFile(__dirname + '/public/css' + filePath, function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.write(data);
//       }
//       res.end();
//     });
//   }  else { //loads index.html
//     fs.readFile(__dirname + '/public/index.html', function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//       }
//       res.end();
//     });
//   }
// }).listen(port, '0.0.0.0');

// module.exports = app;
