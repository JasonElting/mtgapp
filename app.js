var port = process.env.PORT || 3000 
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mtg = require('mtgsdk')
var app = express()
var fs = require('fs');
try{
	var mtgjson = JSON.parse(fs.readFileSync('AllCards.json', 'utf8'));
} catch(error){
	console.log("AllCards.json not found, download here:https://mtgjson.com/json/AllCards.json.zip")
	return
}	
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
	var name=""
	var promises=[]
	var cardlist=[]
	var cardimage=""
	var game=req.body.game
	if(game=="pokemon"){
		mtg = require('pokemontcgsdk')
		console.log("this is pokemon")
	}else if(game=="magic"){
		console.log(game)
		mtg = require('mtgsdk')
	}
	var list=req.body.list
	console.log("posted this: "+list)	
	list=list.split("\n")
	console.log("stacking these guys: \n"+ list)
	var request=[]
	list.forEach(function(card) {		
		request.push({name:card})
		//the mtg.card.where() returns a promise
		console.log("stacking all promises "+card)

		//var currentPromise=mtg.card.where({name:card})
	})

	card.all({ name: 'Squee', pageSize: 1 })
	.on('data', card => {
		console.log(card.name)

	})
	
		res.render('list',{
				list:list,
				name:name,
				cardlist:cardimage
		})	
	
		
	
		
})

app.listen(port,function(){
  console.log('server start');
})

function getBestMatch(cardname,cardlist){
	var bestmatch=cardlist[0]
	cardlist.forEach(function(cardresult){
		console.log("looping "+cardresult.name.toLowerCase())
		console.log("looking for: "+ cardname.toLowerCase())
		if(cardresult.name.toLowerCase()==cardname.toLowerCase()&&cardresult.imageUrl){
			console.log("found match")
			bestmatch=cardresult
			
		}
	})
	return bestmatch
}