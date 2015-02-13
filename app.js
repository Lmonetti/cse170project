
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
var login = require('./routes/login');
var register = require('./routes/register');

var newsfeed = require('./routes/newsfeed');
var publish = require('./routes/publish');
var profile = require('./routes/profile');
var story1 = require('./routes/story1');
var story2 = require('./routes/story2');
var story3 = require('./routes/story3');
var story4 = require('./routes/story4');
var story5 = require('./routes/story5');
var story6 = require('./routes/story6');
var newstory = require('./routes/newstory');
var published = require('./routes/published');
// Example route('./routes/story4');
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/register', register.view);
app.get('/project/:name' , project.viewProject)

app.get('/newsfeed', newsfeed.view);
app.get('/publish', publish.view);
app.get('/profile', profile.view);
app.get('/story1', story1.view);
app.get('/story2', story2.view);
app.get('/story3', story3.view);
app.get('/story4', story4.view);
app.get('/story5', story5.view);
app.get('/story6', story6.view);
app.get('/newstory', newstory.view);
app.get('/published', published.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
