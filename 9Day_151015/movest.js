/**
 * Created by skplanet on 2015-10-15.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');

var Iconv  = require('iconv-lite');
var urlencode = require('urlencode');
/*
var euckr2utf8 = new Iconv('EUC-KR', 'UTF-8');
var utf82euckr = new Iconv('UTF-8', 'EUC-KR');
*/

var formidable = require('formidable');
var form = formidable.IncomingForm();
var querystring = require('querystring');
var movieList = {
    "아바타1":{
        "title":"아바타1",
        "director":"제임스 카메론1",
        "year":2001,
        "synopsis":"아바타 줄거리1",
        "reviews":[]
    },
    "아바타2":{
        "title":"아바타2",
        "director":"제임스 카메론2",
        "year":2002,
        "synopsis":"아바타 줄거리2",
        "reviews":[]
    },
    "아바타3":{
        "title":"아바타3",
        "director":"제임스 카메론3",
        "year":2003,
        "synopsis":"아바타 줄거리3",
        "reviews":[]
    }
};

console.log('data ',movieList['아바타1']);

function Post(){}
function Get(){}
function Put(){}
function Delete(){}
//수정삭제
Put.prototype.route = function (url,req,res){
    console.log('put: ',url);

    var movieitem = url.split('/')[2];
    var mname = urlencode.decode(movieitem)
    console.log('name1: ',url.split('/'));
    console.log('name2: ',urlencode.decode(movieitem));

     if(url=="/movies/"+movieitem){ //수정
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            "success": "ok"
        });
       form.parse(req,function(err,fields,files){
            console.log('fields : ' , fields);
            for(var a in fields){
                movieList[mname][a] = fields[a];
            }
            //movieList[mname].reviews = fields;
            console.log(movieList[mname]);
        });
        res.end(json);
    }
}
Delete.prototype.route = function (url,req,res){

    console.log('delete: ',url);

    var movieitem = url.split('/')[2];
    var mname = urlencode.decode(movieitem)
    console.log('name1: ',url.split('/'));
    console.log('name2: ',urlencode.decode(movieitem));

    if(url=="/movies/"+movieitem){ //수정
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            "success": "ok"
        });
        /*form.parse(req,function(err,fields,files){
            console.log('fields : ' , fields);
            for(var a in fields){
                movieList[mname][a] = fields[a];
            }
            //movieList[mname].reviews = fields;
            console.log(movieList[mname]);
        });*/
        delete movieList[mname];
        res.end(json);
    }
}
Post.prototype.route = function (url,req,res){
    console.log('post: ',url);

    var movieitem = url.split('/')[2];
    var mname = urlencode.decode(movieitem)
    console.log('name1: ',url.split('/'));
    console.log('name2: ',urlencode.decode(movieitem));

    if(url =="/movies"){ //정보추가
        res.writeHead(200, {"Content-Type": "application/json"});
        console.log('call');
        form.parse(req,function(err,fields,files){
            console.log('fields : ' , fields);
            movieList[fields.title] = {
                "title":fields.title,
                "director":fields.director,
                "year":fields.year,
                "synopsis":fields.synopsis,
                "reviews":[]
            };

        });
        res.end();
    }else if(url=="/movies/"+movieitem){ //리뷰추가
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            "success": "ok"
        });
        //movieList[mname].reviews = {"작성자" : "이성규" , "내용":"재밌다."}
        form.parse(req,function(err,fields,files){
            console.log('fields : ' , fields);
            movieList[mname].reviews = fields;
            /*ex
              "reviews": {
             "작성자": "이성규",
             "내용": "재미없다",
             "별점": "5"
             }
           * */

        });
        res.end(json);
    }
}

Get.prototype.route = function (url,req,res){
    console.log('get :' , url);
    var movieitem = url.split('/')[2];
    var mname = urlencode.decode(movieitem)
    console.log('name1: ',url.split('/'));
    console.log('name2: ',urlencode.decode(movieitem));
    var movieitem = url.split('/')[2];
    if(url =="/movies"){
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            "movie": movieList
        });
        res.end(json);
    }else if(url=="/movies/"+movieitem){
        console.log('test ; ' , movieList[mname]);
        console.log('mname : ', mname)
        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            "movie": movieList[mname]
        });
        console.log(json);
        res.end(json);
    }
    res.end()
}

var server = http.createServer(function(req,res){
    var postr = new Post();
    var getr = new Get();
    var putr = new Put();
    var deleter = new Delete();
    var method = req.method.toLowerCase();
    console.log('method :' , method);
    var pathname = url.parse(req.url).pathname;
    switch(method){
        case "get": getr.route(pathname,req,res);
            break;
        case "post":postr.route(pathname,req,res);
            break;
        case "put":putr.route(pathname,req,res);
            break;
        case "delete":deleter.route(pathname,req,res);
            break;
        case "default":
            break;
    }
});


server.listen(8080,function(){
    console.log("on server");
});


