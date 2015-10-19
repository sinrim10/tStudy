/**
 * Created by skplanet on 2015-10-19.
 */

var pool = require('./dbConnection');


var moviefunc = {};
var async = require('async');



moviefunc = {
    getAllMovies: function (req,res) {
        var sql = "select movie_id, title, director, year , synopsis from movies";
        var json = {};
            pool.query(sql, function (err, result) {//insert
                res.json(result);
            }
        );
    },
    getOneMovie: function(req,res){
        var sql = "select * from movies where movie_id = ? ";
        console.log("params " ,req.params.movie_id);
        var id = req.params.movie_id+"";
        pool.query(sql,[id],function(err,result){
            console.log('results',result);
            res.json(result);
        });
    },
    getReviews: function(req,res){
        var sql = "select * from review where movie_id = ? ";
        console.log("params " ,req.params.movie_id);
        var id = req.params.movie_id+"";
        pool.query(sql,[id],function(err,result){
            console.log('results',result);
            res.json(result);
        });
    },
    insMovies : function(req,res,next){
        var sql = "insert into movies set ?"
        console.log('ins ' , req.body);
        pool.getConnection(function(err,conn) {
            conn.beginTransaction(function (err) {
                conn.query(sql, req.body, function (err, result) {
                    if (err) {
                        conn.rollback();
                        conn.release();
                        res.send('오류')
                    }
                    else {
                        conn.commit();
                        conn.release();
                        console.log('commit');
                        res.redirect("/movies");
                    }
                });
            });
        });
    },
    insReviews : function(req,res,next){
        var sql = "insert into review set ?"
        console.log('ins ' , req.body);
        pool.getConnection(function(err,conn) {
            conn.beginTransaction(function (err) {
                conn.query(sql, req.body, function (err, result) {
                    if (err) {
                        conn.rollback();
                        conn.release();
                        res.send('오류')
                    }
                    else {
                        conn.commit();
                        conn.release();
                        console.log('commit');
                        res.redirect("/movies/"+req.body.movie_id);
                    }
                });
            });
        });
    },
    delMovies : function(req,res,next){
        var sql = "delete from review where movie_id = ?"
        var sql2 = "delete from movies where movie_id = ?"
        console.log('del ',req.body.movie_id);
        var id = req.body.movie_id+"";
        pool.getConnection(function(err,conn) {
            conn.beginTransaction(function (err) {
                conn.query(sql, [id] , function (err, result) {
                    if (err) {
                        conn.rollback();
                        res.send('error');
                    }
                    else {
                        conn.commit();
                        conn.query(sql2, [id] , function (err, result) {
                            if (err) {
                                conn.rollback();
                                res.send('error');
                            }
                            else {
                                conn.commit();
                                console.log('this');
                                res.redirect("/movies");
                            }
                        });
                    }
                });
            });
        });
    }
}




module.exports = moviefunc;

