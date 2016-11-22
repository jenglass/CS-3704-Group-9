//Partially from https://docs.mongodb.com/getting-started/node/client/
//https://nodejs.org/api/synopsis.html
//http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-node-js
var express = require('express'); //Allows for simple server functions
var MongoClient = require('mongodb').MongoClient; //Database client
var cors = require('cors'); //Needed for the angular app to send a request.
var bodyParser = require('body-parser');
var app = express(); //Initialize server

app.use(cors()) //Gives this server the proper headers for cross origin requests
app.use(bodyParser.json());
var db_url = 'mongodb://localhost:27017/restaurant'; //Our database url

//Url which returns the menu from the database.
app.get('/getMenu', function(request, response){
	var ret;
	MongoClient.connect(db_url, function(err, db){
		console.log('Connected to database');

		//pull from 'table' menu.
		var menu_items = db.collection('menu').find();

		menu_items.toArray(function(err, results){
			db.close();
			response.send(JSON.stringify(results));
		});
	});
});

app.post('/addToMenu', function(request, response){
	MongoClient.connect(db_url, function(err, db){
		console.log('Post to database')
		db.collection('menu').insert(request.body);
		db.close();
	})
	response.send();
})

//Server listens on port 8000.
app.listen(8000, function() {
  console.log('listening on 8000')
})
