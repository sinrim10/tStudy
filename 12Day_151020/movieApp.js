/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path');

var moviest = require('./route/moviest');

app.set('port',3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extends":false}));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname,'public')));




app.use('/movies',moviest);

app.listen(app.get('port'));