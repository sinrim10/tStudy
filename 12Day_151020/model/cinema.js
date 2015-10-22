/**
 * Created by Administrator on 2015-10-21.
 */

// import the necessary modules
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CinemaSchema = new Schema({
    name: String,
    geo: {
        type: [Number],
        index: '2d'
    }
});
CinemaSchema.index({ loc : '2dsphere' });
CinemaSchema.methods = {
    findClosest :  function(cb) {
        return this.model('Cinema').find({
            loc : { $nearSphere : this.loc },
            name : { $ne : this.name }
        }).limit(1).exec(cb);
    }
}

module.exports = db.model('Cinema', CinemaSchema);