/**
 * Created by skplanet on 2015-10-05.
 */

var result = [];

var makeLotto = function(){
    var arr = [];
    for(;arr.length<6;){
        var random = Math.floor(Math.random() * 45) +1;
        if(arr.indexOf(random) == -1){
            arr.push(random);
        }
    }
    return arr;
}


function abcd(){
    var temp  = [];
    temp = makeLotto();
    console.log(temp);

    /*if(sum < 30 && sum > 20){ //√—«’¿Ã 100, 150 ªÁ¿Ã
       result = temp;
    }else{
        //temp = [];
        abcd();
    }*/
}
abcd();
var count = 5;
var i = 0;
while(true){
    var sum = 0;
    sum = makeLotto().reduce(function(a,b){return a+b;})

    if(sum < 30 && sum > 20){ //√—«’¿Ã 100, 150 ªÁ¿Ã
        ++i;
        result = temp;
    }else{
        //temp = [];

    }
}

console.log(result);