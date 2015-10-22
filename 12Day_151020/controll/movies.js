/**
 * Created by Administrator on 2015-10-21.
 */
var model = require('../model/movies');
var cinema = require('../model/cinema');
exports.list = function(req, res, next) {
    console.log('del');
    model.find(function(err, docs) {
        if (err) return next(err);
        console.log('docs' , docs);
        //res.json(docs);
        res.render('list',{title:"영화 목록",data:docs});
    });
};
exports.findCinema = function(req,res,next){
    console.log('list');
    cinema.find(function(err, docs) {
        if (err) return next(err);
        console.log('docs' , docs);
        //res.json(docs);
        res.render('write_form',{data:docs});
    });
}
exports.insert = function(req, res, next) {
    console.log('insert :',req.body);
    model.create(req.body, function(err, doc) {
        if (err) return next(err);
        console.log('doc ;',doc);
        //res.json(doc);
        res.redirect('/cinema/detail/'+doc.cinema);
    });
};
exports.delete = function(req,res,next){
    var _id = req.body._id;
    console.log('delete: ' , req.body);
    model.findByIdAndRemove(_id, function(err){
        if(err) throw err;
        console.log('삭제 되었습니다.')
        res.json({result:"success"})
    })
}
exports.detail = function(req,res,next){
    var _id = req.params._id;
    console.log('idd : ' ,_id);
    model.findById(_id ,function(err,doc){
        if(err) throw err;
        console.log('docd : ' , doc);
        res.render("detail",{data:doc});
    })
}

exports.addReview = function(req,res,next){
        var _id = req.body._id;
        var review = req.body.review;
        model.findById(_id, function (err, doc) {
            if (err) throw err;
            doc.reviews.push(review);
            doc.save(function(err){
                if(err) throw err;
                console.log('doc : ' , doc);
                console.log('리뷰가 저장 되었습니다.');
                res.redirect('/movies/detail/'+_id);
            });
        });
}

exports.modelName = function(req, res) {
    res.send('my model name is ' + model.modelName);
};


