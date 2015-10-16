/**
 * Created by skplanet on 2015-10-16.
 */

var express = require('express');
var app = express();
var route = require('./hello');

app.use('/',route);

app.use(errorHandler);

// 401 ����
function showAdmin(req, res, next) {
    var error = new Error('���� ����');
    error.code = 401;
    return next(error);
}

function errorHandler(err, req, res, next) {
    // JSON ���� �޼���
    console.log('err : ', err);
    var msg = {
        code:err.code,
        message:err.message
    }
    console.log(msg);
    // �����ڵ�
    res.status(err.code).json(msg);
}
app.listen(8080);