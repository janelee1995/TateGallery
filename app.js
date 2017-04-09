var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var users = require('./routes/users');
var schedule = require('node-schedule');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tategallery');
var app = exports.app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({defaultLayout:'layout'})); //set handlebars as the app.engine and the default layout file is 'layout.handlebars'
app.set('view engine', 'handlebars'); //set the view engine to handlebars


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var expressSession = require('express-session');

app.use(expressSession({secret: 'mySecretKey'}));



require('./routes/main.js');
var routes = require('./routes/index');

app.use('/', routes);
app.use('/users', users);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


module.exports = app;
app.listen(3001);
console.log('listening on 3001');
