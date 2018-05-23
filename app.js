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
	var name=""
	var promises=[]
	var cardlist=[]
	var cardimage=""
	var list=req.body.list
	console.log("posted this: "+list)	
	list=list.split("\n")
	console.log("stacking these guys: \n"+ list)
	list.forEach(function(card) {		
	
		//the mtg.card.where() returns a promise
		console.log("stacking all promises "+card)
		var currentPromise=mtg.card.where({name:card})
		promises.push(currentPromise)
		currentPromise.then(function(cards){
			
			try{
				var bestmatch=cards[0]
				cards.forEach(function(cardresult){
					console.log("looping "+cardresult.name.toLowerCase())
					console.log("looking for: "+ card.toLowerCase())
					if(cardresult.name.toLowerCase()==card.toLowerCase()&&cardresult.imageUrl){
						console.log("found match")
						bestmatch=cardresult
						
					}
				})
				console.log("name: "+ bestmatch.name)
				console.log("pics: "+bestmatch.imageUrl)
				console.log("id: "+bestmatch.multiverseid)
				name=""+bestmatch.name
				cardimage=bestmatch.imageUrl

				//console.log(cardimage)
			} catch(err){
				console.log("error no card")
				console.log(err)
			}
			
		}, function(err){
			console.log("error promise failed")
			console.log(err)
		})

	})
	Promise.all(promises).then(function(vaL){
		console.log("finished: "+ cardimage)
		res.render('list',{
				list:list,
				name:name,
				cardlist:cardimage
		})	
	})
		
	
		

		

})

app.listen(port,function(){
  console.log('server start');
})
