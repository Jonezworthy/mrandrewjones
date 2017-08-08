var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes/controllerRoutes');
var bodyParser = require('body-parser');



//Server
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
//    app.use(device.capture());
routes(app);
app.listen(4000);
console.log('Live Server Running on 4000 PID:' + process.pid);
