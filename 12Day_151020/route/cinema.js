/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var cinema = require('../controll/cinema');

router.get('/list',cinema.list); // 전체 조회
router.get('/detail/:_id',cinema.detail); //상세페이지
router.get('/add',function(req,res,next){
    res.render('add_form',{});
});


router.post('/add',cinema.insert); //극장 추가
//router.post('/add',cinema.addReview); // 리뷰 추가


/*
router.post('/del',function(req,res,next){
    console.log('del ',req.body);
    cinema.delMovies(req,res,next);
})
*/



module.exports = router;