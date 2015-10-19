/**
 * Created by skplanet on 2015-10-19.
 */
var movie = require('./moviefunc');
console.log('test',movie.getAllMovies());

var test = movie.getMovieAndReview();
console.log(test.size());
for(var i in test){
    console.log(i.title);
}
