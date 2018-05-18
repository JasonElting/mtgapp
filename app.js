var port = process.env.PORT || 3000 
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mtg = require('mtgsdk')
var app = express()


//body parser middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//set static path


//view engine
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res) {
	app.set('views', path.join(__dirname,'views'))    

app.set('public', path.join(__dirname,'public'))
  res.render('index', {
  	title: 'Test App',
  })

})

app.post('/list', function(req,res){
	var imagelist=[]
	var list=req.body.list
	console.log("posted this: "+list)
	
	list=list.split("\n")
	console.log("starting for each")
	list.forEach(function(card) {

 
		
	 	mtg.card.where({name:card}).then(cards=> {
	 		var url =cards[0].imageUrl
	 		if(url){
	 		imagelist.push(cards[0].imageUrl)
	 		} else{
	 			console.log("no such card")
	 		}
			console.log("get url: "+imagelist)		
	 	})
	 	
	 	
	})

	console.log("render"+imagelist)

	res.render('list',{
		list:list,
		imagelist:imagelist[0]
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
