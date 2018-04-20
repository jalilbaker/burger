var express = require('express');
var methodoverride = require('method-override');
var bodyParser = require('body-parser');
var exphbrs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodoverride('_method')); 
app.engine('handlebars', exphbrs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var port = 3000;
app.listen(port);





