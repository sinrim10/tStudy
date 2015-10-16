/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser'),
    logger = require('morgan'),
    path = require('path');

app.set('port',3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extends":false}));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res,next){
  var  data ="";
    res.render('ex',{
        title:"연습문제",
        img :[{
            name:'공1',path:'a.jpg'
        },
            {
                name:'공2',path:'b.jpg'
            },
            {
                name:'공3',path:'c.jpg'
            }]
    });

})
app.listen(app.get('port'));