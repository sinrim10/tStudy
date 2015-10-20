/**
 * Created by skplanet on 2015-10-20.
 */
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/moviest"
var data = [
    { title:'스타워즈', director:'조지 루카스', tag:['SF', 'Series', 'Sword', 'Space'], user:[{test:[{"id":1,name:"lsk"},{"id":2,name:"lsk2"},{"id":3,name:"lsk3"}],id:"1234"},{test:[{"id":11,name:"lsk1"},{"id":21,name:"lsk21"},{"id":3,name:"lsk31"}],id:"12341"},{test:[{"id":12,name:"lsk2"},{"id":22,name:"lsk22"},{"id":32,name:"lsk32"}]
        ,id:"12342"}]},
    { title:'반지의 제왕', director:'피터잭슨', tag:['Fantasy', 'Series', 'War']},
    { title:'아바타', director:'제임스 카메론', tag:['SF', 'Space', 'Avata']}];


MongoClient.connect(url,function(err,db){
    var movie = db.collection('movies');
    movie.insert({title:"영화",director:"감독"},function(err,result){
        if(err){
            console.log('err : ' ,err);
            return;
        }
        console.log('result : ' , result);

        console.log('방금 추가한 ObjectId : ' , result.insertedIds);
    });

    movie.insertMany(data,function(err,result){
        if(err){
            console.log('err : ' ,err);
            return;
        }
        console.log('result : ' , result.insertedIds);
        movie.find({_id:result.insertedIds[0]}).toArray(function(err, docs) {
            console.log('== Find ALL');
            //var json = JSON.parse(docs);


            console.log(docs[0].user[0].test);
        });
    });



})
