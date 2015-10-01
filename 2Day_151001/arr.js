/**
 * Created by skplanet on 2015-10-01.
 * 정렬 예제.....
 */
var arr = [3,2,1,33,22,11]
var i =0;
arr.sort(function(a,b){
    console.log(++i + " : " + arr);
    return b > a
})
//console.log(arr);