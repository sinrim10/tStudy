/**
 * Created by skplanet on 2015-10-16.
 */

var express = require('express');
var router = express.Router();

router.get('/:a',function(req,res,next){
    try{
        var error = new Error('value1, value2는 숫자만 입력');
        error.code = 400;
        throw('애러발생');
        res.send('ok');

    }catch(err){
        next(err);
    }
})

module.exports = router;