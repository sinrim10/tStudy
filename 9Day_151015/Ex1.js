/**
 * Created by skplanet on 2015-10-15.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');


var server = http.createServer(function(req,res){
    console.log(req)
    var pathname = url.parse(req.url).pathname;
    if(pathname=="/"){
        var a = fs.readdirSync("../");
        console.log(a)
        res.setHeader('text/html',200);
        //res.write('<ul>')
        for(var i = 0 ; i < a.length;i++){
            res.write('<div>'+a[i]+'</div>')
        }
        //res.write('</ul>')

        res.end()
    }
    if(pathname =="/image"){
        var a = fs.readdirSync("../image");
        console.log(a);
        res.setHeader('text/html',200);
        //res.write('<ul>')
        for(var i = 0 ; i < a.length;i++){
            res.write('<div>'+a[i]+'</div>')
        }
        res.end()
    }

});


server.listen(8080,function(){
    console.log("on server");
});


