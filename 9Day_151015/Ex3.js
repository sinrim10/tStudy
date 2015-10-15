/**
 * Created by skplanet on 2015-10-15.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var formidable = require('formidable');
var movieList = [];

var server = http.createServer(function(req,res){

    var method = req.method.toLowerCase();
    var pathname = url.parse(req.url).pathname;
    var form = formidable.IncomingForm();
    if(method == "get"){
        if(pathname.indexOf('/images') == 0) {
            var path = __dirname + req.url;
            console.log(path);
            fs.readFile(path,function(err,data){
                res.writeHead(200,{'content-type':'image/jpg'});
                console.log(data);
                res.end(data);
            })

          /*  var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>';
            body += "<img src='"+path+"'>";


            body += '</body>';
            body += '</html>';


            res.write(body);
            res.end();*/

        }else  if(pathname == "/list") {




        var body = '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>';
            for (var i = 0; i < movieList.length; i++) {
                console.log('img : ' , movieList[i]);
                body += "<img src='/images/"+movieList[i].img1+"'>"
                body += "<img src='/images/"+movieList[i].img2+"'>"
            }

            body += '</body>';
            body += '</html>';

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(body);
            res.end();

        }else if(pathname == "/list/json"){
             res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify({
                "movie": movieList
            });
            res.end(json);
        }

        else{
            console.log('kkkk')
            fs.readFile("./Ex2.html",function(err,data){
                res.writeHead(200,{'content-type':'text/html'});
                console.log(data);
                res.end(data);
            })
        }
    }else{
        if(pathname=="/upload"){
            form.parse(req,function(err,fields,files){
                var image1 = files.image1.path;
                var image2 = files.image2.path;
                var img1name = Date.now()+ files.image1.name;
                var img2name = Date.now()+files.image2.name;
                var title = fields.title;
                console.log(image1);
                fs.rename(image1, './images/' +img1name, function (err) {
                    if (err) throw err;
                    console.log('renamed complete');
                });
                fs.rename(image2, './images/'+img2name, function (err) {
                    if (err) throw err;

                    console.log('renamed complete');
                });
                movieList.push({"title":title,"img1":img1name,"img2":img2name})

                res.end('ok');
            })
        }

    }

});


server.listen(8081,function(){
    console.log("on server");
});


