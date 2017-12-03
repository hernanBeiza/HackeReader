const console = require("clor");

var express = require('express');

var app = express();
var multer = require('multer')
var constants = require('constants');
var constant = require('./config/constants');


var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var flash = require('connect-flash');
var path = require('path');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');
//app.set('view engine', 'ejs'); // set up ejs for templating


//required for passport
//app.use(session({ secret: 'iloveyoudear...' })); // session secret

app.use(session({
    secret: 'I Love India...',
    resave: true,
    saveUninitialized: true
}));

app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
	console.yellow.log("404");
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});

// CRON TASK
/*
var CronJob = require('cron').CronJob;
var controller = require("./app/controllers/ActualizarController");
//new CronJob('* * * * * *', function() {
new CronJob('00 59 * * * *', function() {
	console.log('You will see this message every cron run', dateFormat(new Date(), "dd-mm-yyyy h:MM:ss"));;
	controller.actualizarInterno(function(result,noticias,mensaje){
		console.log(result,noticias,mensaje);
	});
}, null, true, 'America/Los_Angeles');
*/

exports = module.exports = app;