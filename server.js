var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./controller/router');
router.initialize(app, '/', __dirname);
app.use(express.static(__dirname))

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server is available on port ' + port);