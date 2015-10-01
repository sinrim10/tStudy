/**
 * Created by skplanet on 2015-10-01.
 * Map ¿¹Á¦...
 */


var arr = [3,4,5];
var temp = [];
/*for(var i=0;i<arr.length;i++){
    temp[i] = arr[i]*arr[i];
}*/

var temp = arr.map(function(a){
    return a*a;
})
console.log(temp);
console.log(arr);