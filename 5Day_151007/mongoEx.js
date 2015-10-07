/**
 * Created by skplanet on 2015-10-07.
 */
var mongoose = require("mongoose");

var uri = 'mongodb://localhost/test';
global.db = mongoose.createConnection(uri);

var Cat = db.model('Cat',{name : String});
var kitty = new Cat({name:'야옹이'});

kitty.save(function(err){
    if(err) {
        console.log('err',err);
    }else{
        console.log('저장')
    }
});

//var Schema = mongoose.Schema;