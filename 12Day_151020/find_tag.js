var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/moviest';

MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error('MongoDB 연결 실패', err);
      return;
   }
   
   // 콜렉션
   var movies = db.collection('movies');
      
   // 다수의 도큐먼트 추가
   movies.insertMany([
      { title:'스타워즈', director:'조지 루카스', tag:['SF', 'Series', 'Sword', 'Space']},
      { title:'반지의 제왕', director:'피터잭슨', tag:['Fantasy', 'Series', 'War']},
      { title:'아바타', director:'제임스 카메론', tag:['SF', 'Space', 'Avata']}],
      function(err, results) {
         if (err) {
            console.error('Insert Error', err);
            return;
         }
         console.log('초기 데이터 Insert 성공');
                  
         // 배열(TAG)로 검색
         movies.find({tag:'SF'}).toArray(function(err, docs) {
            if (err) {
               console.error('Find Tag Error', err);
               return;
            }
            
            console.log('== SF 태그 영화\n', docs);
         });     
   });      
});