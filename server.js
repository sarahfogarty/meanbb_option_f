var express = require('express');
var app = express();
var server = app.listen(8000)
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var session = require('express-session')
app.use(session({
	secret:'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.use(express.static(path.join(__dirname,'./client')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);



app.listen(8000, function(){
	console.log('listening on 8000');
})
