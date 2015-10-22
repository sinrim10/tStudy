/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path');

var mongoose =require('mongoose');
var uri = "mongodb://localhost:27017/moviest"
global.db = mongoose.createConnection(uri);
var movies = require('./route/movies');
var cinema = require('./route/cinema');

app.set('port',3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extends":false}));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname,'public')));



app.use('/movies',movies);
app.use('/cinema',cinema);
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}
app.use(function(req, res, next){
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        //res.redirect('/cinema/list');
        //return;
    }
    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
});


app.listen(app.get('port'));