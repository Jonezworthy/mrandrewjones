var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes/controllerRoutes');
var bodyParser = require('body-parser');

//Server
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
//    app.use(device.capture());


app.use(bodyParser.json());

routes(app, express);
app.listen(4200);
console.log('Live Server Running on 4200 PID:' + process.pid);