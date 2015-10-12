/**
 * Created by skplanet on 2015-10-12.
 */
var array = [-1,1,3,-2,2];
var t1 = []
var c = array.filter(function(a,b){
    if(a<0){
        return a;
    }else{
        t1.push(a);
    }

})
console.log(t1);
console.log(c.concat(t1));
