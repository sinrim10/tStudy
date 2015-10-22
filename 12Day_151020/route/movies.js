/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var movie = require('../controll/movies');
router.get('/list',movie.list); // 전체 조회
router.get('/detail/:_id',movie.detail); //상세페이지
/*router.get('/write',function(req,res,next){
    res.render('write_form',{});
});*/
router.get('/write',movie.findCinema);

router.post('/write',movie.insert); //영화 추가
router.post('/add',movie.addReview); // 리뷰 추가
router.delete('/del',movie.delete); //영화삭제.

router.post('/del',function(req,res,next){
    console.log('del ',req.body);
    moviefunc.delMovies(req,res,next);
})



module.exports = router;