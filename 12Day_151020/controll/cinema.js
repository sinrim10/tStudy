/**
 * Created by Administrator on 2015-10-21.
 */
var model = require('../model/cinema');
var movie = require('../model/movies');
exports.list = function(req, res, next) {
    console.log('list');
    model.find(function(err, docs) {
        if (err) return next(err);
        console.log('docs' , docs);
        //res.json(docs);
        res.render('cinema/list',{title:"극장 목록",data:docs});
    });
};

exports.insert = function(req, res, next) {
    console.log('insert ' , req.body);
    var name = req.body.cinema;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    /*var cinema = new model(data);
    cinema.save();*/

    /*model.name = req.body.cinema;
    model.geo    = [ latitude, longitude ];*/
   /* var data = {name : name,geo:[{}] }*/
    var Cinema = new model();
    Cinema.name = name;
    Cinema.geo  = [ latitude, longitude ];
    console.log('cinema ; ' + Cinema);

    Cinema.save(function (err,data) {
        if (err) throw err;
        console.log('data :' , data);
        /*res.json({});*/
        res.redirect('/cinema/list')
    })/*
    model.create({name : name,geo:[latitude, longitude] },function (err,data) {
        if (err) throw err;
        console.log('data :' , data);
        /!*res.json({});*!/
        res.redirect('/cinema/list')
    });*/
    /*model.create({name : req.body.cinema,loc: { type: 'Point', coordinates: [latitude,longitude] }},function(err){
        if(err) throw err;
    });*/
    //res.redirect('/cinema/list')
    //model.create(data,null); /*function(err,doc){
   /* cinema.save(function(err,doc){
        console.log('doc', doc);
        res.redirect('/cinema/list')
    });*/
};
exports.detail = function(req,res,next){
    var _id = req.params._id;
    var name ;
    var cinema ;
    console.log('id : ' ,_id);
    model.findById(_id,function(err,doc){
        console.log('doc : ' , doc);
        //name = doc.name;
        cinema = doc;
        movie.find({cinema:_id },function(err,doc){
            if(err) throw err;
            console.log('doc ; ' , doc);
            res.render('list',{title:"영화 목록",cinema:cinema,data:doc})
        })
    });

}

exports.addReview = function(req,res,next){
    var _id = req.params._id;
    model.findById(_id, function (err, doc) {
        if (err) throw err;
        doc.reviews.push("aaaaaa");
        doc.save(function(err){
            if(err) throw err;
            console.log('doc : ' , doc);
            console.log('리뷰가 저장 되었습니다.')
        });
    });
}

exports.modelName = function(req, res) {
    res.send('my model name is ' + model.modelName);
};


