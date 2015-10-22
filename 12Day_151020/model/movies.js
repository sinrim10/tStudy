/**
 * Created by Administrator on 2015-10-20.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MonvieSchema = new Schema({
    cinema: {type : Schema.ObjectId, ref : 'Cinema'},
    title: {type : String, default : '', },
    director: {type : String, default : ''},
    year : {type : String, default : ''},
    synopsis:{type: String, default : ''},
    reviews : {type : []},
    createdAt  : {type : Date, default : Date.now}
});

MonvieSchema.path('title').required(true,'타이틀 공백');

/*MonvieSchema.methods = {
    addReview : function(id,review,cb){
       this.findById(id, function (err, doc) {
            if (err) throw err;
            doc.review.push(review);
            doc.save(function(err){
                if(err) throw err;
                console.log('리뷰가 저장 되었습니다.')
            });
        });
    }
}*/


module.exports = db.model('Movies',MonvieSchema);