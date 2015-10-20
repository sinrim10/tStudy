/**
 * Created by skplanet on 2015-10-20.
 */
var mysql = require('mysql');
var config = {
    host:"localhost",
    user:"root",
    password:"dltjdrb",
    port:3306,
    database:"Moviest"
}
var pool = mysql.createPool(config);
var conn = mysql.createConnection(config);
module.exports.pool = pool;
module.exports.conn = conn;
