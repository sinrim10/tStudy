/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var bike = require('../controll/bike');

router.post('/',bike.insert); // 전체 조회

/*
router.post('/del',function(req,res,next){
    console.log('del ',req.body);
    cinema.delMovies(req,res,next);
})
*/


module.exports = router;