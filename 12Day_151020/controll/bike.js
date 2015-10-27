/**
 * Created by Administrator on 2015-10-27.
 */
var bike = require('../model/bike');
exports.insert = function(req, res, next) {
    //console.log('insert ' , req.body);
    //var name = req.body.cinema;
    //var latitude = req.body.latitude;
    //var longitude = req.body.longitude;
    /*var cinema = new model(data);
     cinema.save();*/

    /*model.name = req.body.cinema;
     model.geo    = [ latitude, longitude ];*/
    /* var data = {name : name,geo:[{}] }*/
    var Bikes = new bike({
        type:"산악자전거",
        component:["01","02"],
        height:"03",
        smartlock:true,
        location:[{loc:[36.77,127.231]},{loc:[33.77,122.231]}],
        title:"즐거운자전거",
        intro:"소개글",
        image:[{cdnUri:"/bikee/test1.jpg"},{cdnUri:"/bikee/test2.jpg"}],
        price:{hour:10000,day:3000,month:5000},
        comments:[{point:4,body:"좋은자전거입니다"},{point:2,body:"좋은자전거입니다1"}]
    });
    //Cinema.name = name;
    //Cinema.geo  = [ latitude, longitude ];
    console.log('Bikes ; ' + Bikes);

    Bikes.save(function (err,data) {
        if (err) throw err;
        console.log('data :' , data);
        /*res.json({});*/
        //res.redirect('/cinema/list')
        //res.json(data);
        res.end();
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