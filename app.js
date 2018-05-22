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
	
	var cardlist=[]
	var list=req.body.list
	console.log("posted this: "+list)	
	list=list.split("\n")
	console.log("stacking these guys: \n"+ list)
	list.forEach(function(card) {		
		var promises=[]
		//the mtg.card.where() returns a promise
		console.log("stacking all promises "+card)
		promises.push(mtg.card.where({name:card}))			
		

			Promise.all(promises).then(function(allCards){
				console.log("all cards")
				var count=0
				allCards.forEach(function(card){
					try{
						console.log(card[0].name)	
					} catch(error){
						console.log("failed on "+list[count])
					}


					count++
				})
				

			})
		})
	console.log("finished")
	
		res.render('list',{
			list:list,
			cards:cardlist
		})

})

app.listen(port,function(){
  console.log('server start');
})
