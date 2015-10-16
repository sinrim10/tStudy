/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var app = express();
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(__dirname+'/public/images.ico'))

app.post('/',function(req,res){
    console.log('req :', req.body);
    res.send('ok');
})
app.listen(2020);
