/**
 * Created by skplanet on 2015-10-05.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dltjdrb',
    database : 'haksa'
});


for(var i=0; i< 10 ; i++){

    connection.query("insert into test set ?",{aaa: '3'+i}, function(err, result) {
        if (err) throw err;


    });

}




connection.query('SELECT * from test', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows);
});

connection.end();