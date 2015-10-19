/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var moviefunc = require('../model/moviefunc');
var request = require('request');
var async = require('async');
router.get('/',function(req,res1){
    request('http://localhost:3030/movies/list',function(err,res,body){
        if (!err && res.statusCode == 200) {
            var json = JSON.parse(body);
            res1.render('list',{title:"영화 목록",data:json});
        }
    })
});
router.get('/list',function(req,res){
    moviefunc.getAllMovies(req,res);
});
router.get('/list/:movie_id',function(req,res){
    moviefunc.getOneMovie(req,res);
})
router.get('/review/:movie_id',function(req,res){
    moviefunc.getReviews(req,res);
})

router.get('/write',function(req,res,next){
    res.render('write_form',{});
})

router.get('/:movie_id',function(req,res1){
    var id = req.params.movie_id;
    var movie = {};
    var review = {};

    console.log('id ',id);
    async.waterfall([function(callback){
        request('http://localhost:3030/movies/list/'+id,function(err,res,body){
            if (!err && res.statusCode == 200) {
                movie = JSON.parse(body);
                console.log('movie ' , movie);
            }
            callback();
        });
    },function(callback){
        request('http://localhost:3030/movies/review/'+id,function(err,res,body){
            if (!err && res.statusCode == 200) {
                review = JSON.parse(body);
                console.log('review ' , review);
            }
            callback();
        })
    }],function(err){
        var data = {data : movie,review:review};
        console.log(data);
        res1.render('detail',{data:data});
    })



});
/*router.get('/update/:title',function(req,res){//수정
    var title = req.params.title;
    res.render('update_form',{title:title});
})*/



router.post('/review',function(req,res,next){ //리뷰 작성.
    //console.log('data1',req.query);

    console.log('review',req.body);
    moviefunc.insReviews(req, res,next);
})
router.post('/write',function(req,res,next){
    console.log('data2',req.body);
    moviefunc.insMovies(req,res,next);
});
router.post('/del',function(req,res,next){
    console.log('del ',req.body);
    moviefunc.delMovies(req,res,next);
})

/*router.put('/update/:id',function(req,res) {
    var id = req.params.id;
    var data = req.body;
    console.log('id : ', id);
    movieList[id] = data;
    //console.log('detail : ' , movieList['아바타1']);
    res.render('list', {title: "영화 목록", data: movieList})

});*/

    /*router.put('/',function(req,res){
        res.render('list',{title:"영화 목록" , data:movieList});
    })
    router.put('/:id',function(req,res){
        var id = req.params.id;
        console.log('id : ' , id);
        var detail = movieList[id];
        //console.log('detail : ' , movieList['아바타1']);
        res.render('detail',{data:detail});

    })

    router.delete('/',function(req,res){
        res.render('list',{title:"영화 목록" , data:movieList});
    })
    router.delete('/:id',function(req,res){
        var id = req.params.id;
        console.log('id : ' , id);
        var detail = movieList[id];
        //console.log('detail : ' , movieList['아바타1']);
        res.render('detail',{data:detail});

    })*/



module.exports = router;