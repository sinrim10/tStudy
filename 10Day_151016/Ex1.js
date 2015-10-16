/**
 * Created by skplanet on 2015-10-16.
 */
/**
 * Created by skplanet on 2015-10-15.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var movieList = [];
var formidable = require('formidable');
var form = formidable.IncomingForm();

var server = http.createServer(function(req,res){

    var method = req.method.toLowerCase();
    var pathname = url.parse(req.url).pathname;

    if(method == "get"){
        var movieitem = pathname.split('/')[2];
        if(pathname == "/sort/"+movieitem){
            if(movieitem == "num"){
                console.log('num',movieList)
                movieList.sort(function(a,b){
                    return parseInt(a)>parseInt(b);
                });
            }else if(movieitem == "length"){
                console.log('length',movieList)
                movieList.sort(function(a,b){
                    return a.length < b.length
                })
            }
            res.writeHead(200, {"Content-Type": "application/json"});

            var json = JSON.stringify({
                "result": movieList
            });

            res.end(json);
        }
    }else{
        var buffer = "";
        var movieitem = pathname.split('/')[2];
        //var mname = urlencode.decode(movieitem)
        //console.log('name1: ',url.split('/'));
//        console.log('name2: ',urlencode.decode(movieitem));

            console.log('post: ',pathname);



        if(pathname=="/input/"+movieitem){ //리뷰추가
                res.writeHead(200, {"Content-Type": "application/json"});
                var json = JSON.stringify({
                    "success": "ok"
                });
                //movieList[mname].reviews = {"작성자" : "이성규" , "내용":"재밌다."}
                movieList.push(movieitem);
                res.end(json);
            }

        }








});


server.listen(8080,function(){
    console.log("on server");
});



