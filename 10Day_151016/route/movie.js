/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var moviefunc = require('../model/moviefunc');
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
var request = require('request');
/*request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }
})*/

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

router.get('/write',function(req,res){
    res.render('write_form',{});
})
router.get('/review/detail/:title',function(req,res){
    var title = req.params.title;
    var data = movieList[title].reviews
    console.log('data l' , movieList);
    console.log('data l' , data);

    res.render('review_detail',{data:data})
})
router.get('/review/:title',function(req,res){
    var title = req.params.title;
    res.render('review_form',{title:title});
})

router.get('/:id',function(req,res){
    var id = req.params.id;
    console.log('id : ' , id);
    var detail = movieList[id];
    //console.log('detail : ' , movieList['아바타1']);
    res.render('detail',{data:detail});

})
router.get('/update/:title',function(req,res){//수정
    var title = req.params.title;
    res.render('update_form',{title:title});
})



router.post('/review/:title',function(req,res){
    //console.log('data1',req.query);
    var title = req.params.title;
    console.log('data2',req.body);

    movieList[title].reviews = req.body;
    res.render('list',{title:"영화 목록",data:movieList})
    //res.render('list',{title:"영화 목록" , data:movieList});
})
router.post('/write',function(req,res,next){
    console.log('data2',req.body);
    moviefunc.insMovies(req,res,next);
    res.redirect('/');
})
router.post('/:id',function(req,res){//상세페이지
    var id = req.params.id;
    console.log('id : ' , id);
    var detail = movieList[id];
    //console.log('detail : ' , movieList['아바타1']);
    res.render('detail',{data:detail});

})
router.put('/update/:id',function(req,res) {
    var id = req.params.id;
    var data = req.body;
    console.log('id : ', id);
    movieList[id] = data;
    //console.log('detail : ' , movieList['아바타1']);
    res.render('list', {title: "영화 목록", data: movieList})

});

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