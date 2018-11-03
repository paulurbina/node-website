const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Connect DataBase
mongoose.connect('mongodb://person_codeurb:client_codeurb1@ds249233.mlab.com:49233/client_codeurb')
	.then(db => console.log('DB is connected'))
	.catch(err => console.log(err));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Routes
app.use(require('./routes/'));
app.use(express.static(path.join(__dirname, 'public')));

//Static files

//Listen server
app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});