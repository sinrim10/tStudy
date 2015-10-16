/**
 * Created by skplanet on 2015-10-16.
 */

var express = require('express');
var app = express();
var route = require('./hello');

app.use('/',route);

app.use(errorHandler);

// 401 에러
function showAdmin(req, res, next) {
    var error = new Error('권한 없음');
    error.code = 401;
    return next(error);
}

function errorHandler(err, req, res, next) {
    // JSON 에러 메세지
    console.log('err : ', err);
    var msg = {
        code:err.code,
        message:err.message
    }
    console.log(msg);
    // 상태코드
    res.status(err.code).json(msg);
}
app.listen(8080);