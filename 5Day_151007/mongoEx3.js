/**
 * Created by skplanet on 2015-10-07.
 */
var mongoose = require("mongoose");

var uri = 'mongodb://localhost/test';
global.db = mongoose.createConnection(uri);

var Schmea = mongoose.Schema;
var Cat = new Schmea();
var blog = new Schmea();

blog.add({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

Cat.add({
    name:{type : String,index:true},
    date: Date
})
Cat.path('date')
    .default(function(){
        return new Date()
    })
    .set(function(v){
        return v == 'now' ? new Date() : v;
    });

blog.path('date')
    .default(function(){
        return new Date()
    })
    .set(function(v){
        return v == 'now' ? new Date() : v;
    });



var blogData = {};
//var test = db.model('Cat',Cat);
var blogTest = db.model('Blog',blog);
//var Cat = db.model('Cat',{name : String});
/*var kitty = new Cat({name:'야옹이'});*/
/*
test.create({
    name:"이성규"
},function(err,result){
    if (err) throw err;
    console.log("added to db: %s", result.toString());
})*/
blogData = {
    title:"제목",
    author:44,
    body:"글남깁니다",
    comments:[
        {body:"댓글1",date:"xxx"}
    ],
    date:Date.now(),
    hidden:false,
    meta:{votes:12,favs:4}
}

blogTest.create({
    title:"제목",
    author:new Number(3434),
    body:"글남깁니다",
    comments:[
        {body:"댓글1",date:Date.now()}
    ],
    date:Date.now(),
    hidden:false,
    meta:{votes:12,favs:4}
}, function(err,result){
    console.log(err);
    if (err) throw err;
    console.log("added to db: %s", result.toString());
});

/*test.save(function(err){
 if(err) {
 console.log('err',err);
 }else{
 console.log('저장')
 }
 });*/

//var Schema = mongoose.Schema;