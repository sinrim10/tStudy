/**
 * Created by skplanet on 2015-10-15.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var movieList = [];

var server = http.createServer(function(req,res){

    var method = req.method.toLowerCase();
    var pathname = url.parse(req.url).pathname;

    if(method == "get"){
        if(pathname == "/list"){
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify({
                MovieList: movieList
            });
            res.end(json);
        }
    }else{
        var buffer = "";
        if(pathname=="/upload"){
            var parsed = url.parse(req.url, true);
            //console.log(parsed);
            req.on("data",function(chunk){
                buffer += chunk.toString();
                console.log("data : " , buffer.toString());
            });
            req.on("end",function(){
                var parsed  = querystring.parse(buffer.toString());
                //console.log('parsed' , parsed);
                var data1 = parsed.title;
                var data2 = parsed.contents;
                //console.log('data1' , data1)
                //console.log('data2' , data2)
                movieList.push({title:data1,contents:data2});
                console.log('ok');
                console.log(movieList);
                res.end();
            })

        }

    }






});


server.listen(8080,function(){
    console.log("on server");
});


