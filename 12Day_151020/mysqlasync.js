/**
 * Created by skplanet on 2015-10-19.
 */

//var dbConn = require('./dbConnection');
var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    password: 'dltjdrb',
    port: 3306,
    database: 'Moviest'
}

var pool = mysql.createPool(config);


var async = require('async');

pool.getConnection(function(err,conn){
    async.waterfall([
       function(callback){
           var data = {
               title:"변호사",
               director : "감독",
               year : "2013"
           }
           var sql = "insert into movies set ?"
           conn.query(sql,data,function(err,results){//insert
                    var insertId = results.insertId;
                   console.log('results',results)
                   console.log('insertid ', insertId);
                   callback(null,insertId);
               }
           );
       },
        function(insertId,callback){
            var sql2 = "update movies set title= ? where movie_id = ?"
            conn.query(sql2,["변호사"+insertId,insertId],function(err,results){
                console.log('results',results)
                callback(null);
            });
        },
        function(callback){
            var year = 2000;
            var sql3 = "delete from movies where year <= ? "
            conn.query(sql3,[year],function(err,results){
                console.log('results',results);
                callback(null);
            })
        }],function(err){
            if(err) console.log('err',err)
            else console.log('ok'); conn.release();
        }


    );


})

