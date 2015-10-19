/**
 * Created by skplanet on 2015-10-16.
 */
var express = require('express');
var router = express.Router();
var model = require('../model/moviefunc');

router.get('/',function(req,res){
    model.getAllMovies(req,res);
})
module.exports = router;