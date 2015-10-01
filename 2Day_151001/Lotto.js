/**
 * Created by skplanet on 2015-10-01.
 */
var tempLotto = [];//최종 로또 값
var count = 0; //게임수
/*for(var i = 1;i<6;i++){
    randomNum().sort(function(a,b){
        return a>b;
    });
    console.log(i + " 번째 게임 ");
}*/

while(true){

    var randomArr = randomNum();
    var sum = randomArr.reduce(function(a,b){
        return a+b;
    });

    if(sum < 150 && sum > 100){
        count++;

        tempLotto[count-1] = randomArr;
    }
    if(count ==5 ){
        //console.log(tempLotto);
        for(var i = 0 ; i< tempLotto.length;i++){
            console.log(i+1 +" 번째 게임 : " + tempLotto[i].sort(function(a,b){return a>b;}));
            document.write(i    +1 +" 번째 게임 : " + tempLotto[i].sort(function(a,b){return a>b;}));
            document.write("<p>")
        }
        break;
    }
}
//console.log(randomNum());

function randomNum(){
    var lotto = [];
    var randomNum = [];

    for(var i = 0; i<45;i++){
        lotto[i] = i+1;
    }

    for(var i=0;i<6;i++){
        var num = Math.floor(Math.random()*(45-i)+1); // 난수 발생;
        var index = num -1;
        randomNum[i] = lotto[index];
        lotto.splice(index,1);
        /*console.log("랜덤 : " + num);
        console.log("배열1: " + randomNum);
        console.log("로또 배열 : "  + lotto);*/

    }
    return randomNum;
}
//console.log(lotto);
