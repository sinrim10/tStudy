/**
 * Created by skplanet on 2015-10-07.
 */
var mongoose = require("mongoose");

var uri = 'mongodb://localhost/test';
global.db = mongoose.createConnection(uri);

var Schmea = mongoose.Schema;
var Cat = new Schmea();

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

var test = db.model('Cat',Cat);

//var Cat = db.model('Cat',{name : String});
/*var kitty = new Cat({name:'야옹이'});*/

test.create({
    name:"이성규"
},function(err,result){
    if (err) throw err;
    console.log("added to db: %s", result.toString());
})

/*test.save(function(err){
    if(err) {
        console.log('err',err);
    }else{
        console.log('저장')
    }
});*/

//var Schema = mongoose.Schema;