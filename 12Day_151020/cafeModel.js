/**
 * Created by skplanet on 2015-10-20.
 */
var pool = require("./dbConnection").pool;
var conn = require("./dbConnection").conn;

conn.connect(
    function(err){
        if(err) {
            console.log("MySQL 연결 실패 : ", err);
            return;
        }


    var sql = "insert into cafes(title,location) values ('스타벅스',Point(36.350412,127.384548))";
    conn.query(sql,function(err,result){
        if(err) {
            console.log("insert err : " , err);
            return;
        }
        console.log(" insert 성공 : " , result);
    });
    var sql2 = 'INSERT INTO cafes(title, location) VALUES (?, GeomFromText(?));';
    conn.query(sql2, ['카페베네', 'POINT(36.74 126.11)'], function(err, result) {
        if ( err ) {
            console.error('Insert Error ', err);
            return;
        }
        console.log('INSERT2 성공 : ',result);
    });
        setTimeout(function(){
            var sql3 = "select * from cafes";
            conn.query(sql3,function(err,result){
                if(err){
                    console.log('select error : ' ,err);
                    return;
                }
                console.log('select : ' , result);
            })

        },1000)
    }


);
