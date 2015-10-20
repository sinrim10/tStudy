var mysql = require('mysql');
var dbConfig = {
   host: 'localhost',
   user: 'root',
   password: 'dltjdrb',
   port: 3306,
   database: 'moviest'
};

var conn = mysql.createConnection(dbConfig);

conn.connect(function (err) {
   if (err) {
      console.error('err : ', err);
      return;
   }
   
   var sql1 = 'insert into cafes(title, location) values ("스타벅스", Point(36.350412, 127.384548));';
   conn.query(sql1, function(err, result) {
      if ( err ) {
         console.error('insert Error ', err);
         return;
      }
      console.log('insert1 성공');
   });
   
   var sql2 = 'insert into cafes(title, location) values (?, GeomFromText(?));';
   conn.query(sql2, ['카페베네', 'POINT(36.74 126.11)'], function(err, result) {
      if ( err ) {
         console.error('insert Error ', err);
         return;
      }
      console.log('resut ;' , result)
      console.log('insert2 성공');      
   });
   

   setTimeout(function() {
      

      var sql3 = 'select title, ST_Distance(location, Point(30, 126)) as dist from cafes';
      conn.query(sql3, function(err, results) {
         if ( err ) {
            console.error('select, Error ', err);
            return;
         }
         console.log('select, 성공');
         console.log(results);          
      });
      
      var sql4 = 'select title, X(location) as lat, Y(location) as lnt from cafes order by ST_Distance(location, Point(30, 126) );';
      conn.query(sql4, function(err, results) {
         if ( err ) {
            console.error('select, error ', err);
            return;
         }
         console.log('select,  성공');
         results.forEach(function(item) {
            console.log('Title : ' + item.title + ' Location : ' + item.lat + ',' + item.lnt);
         });
      });
      
   }, 1000);
});