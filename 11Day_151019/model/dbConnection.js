/**
 * Created by skplanet on 2015-10-19.
 */
var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    password: 'dltjdrb',
    port: 3306,
    database: 'Moviest'
}

var pool = mysql.createPool(config);

module.exports = pool;
