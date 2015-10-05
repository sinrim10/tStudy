/**
 * Created by skplanet on 2015-10-05.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dltjdrb',
    database : 'tstudy'
});

connection.connect();

connection.query('SELECT * from bike', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].id);
});

connection.end();