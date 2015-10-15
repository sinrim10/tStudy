/**
 * Created by skplanet on 2015-10-14.
 */
/*
var http = require("http");

var server = http.createServer(function(req,res){
    res.end("hello");
});


server.listen(3000);*/
var querystring = require('querystring');

//var urlStr = "http://localhost:3000/category/board/list/3";
var urlStr = "http://localhost?category=board&type=list&number=3";

var parse = querystring.parse(urlStr);
console.log(parse);
