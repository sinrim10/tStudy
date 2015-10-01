/**
 * Created by skplanet on 2015-10-01.
 * Lotto 게임 생성 과제..
 * 조건 1. 5게임 생성
 * 조건 2. 1게임의 로또 번호가 100~150 사이의 값만 생성
 * 조건 3. 정렬
 *
 */
var resultLotto = [];//최종 로또 값
var count = 0; //게임수

while(true){
    var randomArr = [];
    var sum = 0;

    randomArr = lottoMake();
    sum = randomArr.reduce(function(a,b){
        return a+b;
    });

    if(sum < 150 && sum > 100){ //총합이 100, 150 사이
        count++;
        resultLotto[count-1] = randomArr;
    }

    if(count ==5 ){
        //console.log(resultLotto);
        for(var i = 0 ; i< resultLotto.length;i++){//화면에 출력..
            resultLotto[i].sort(function(a,b){
                return a>b;
            });
            console.log(i+1 +" 번째 게임 : " + resultLotto[i]);
            document.write(i    +1 +" 번째 게임 : " + resultLotto[i]);
            document.write("<p>")
        }
        break; //5게임 생성후 종료.
    }
}
/*
*  로또 번호생성 함수.
* */
function lottoMake(){
    var lotto = [];
    var randomNum = [];

    for(var i = 0; i<45;i++){
        lotto[i] = i+1;
    }

    for(var i=0;i<6;i++){ //로또번호 추출.
        var num = Math.floor(Math.random()*(lotto.length)+1); // 난수 발생;
        var index = num -1;
        randomNum[i] = lotto[index];
        lotto.splice(index,1); //중복 발생을 피하기위하여 삭제...
        /*console.log("랜덤 : " + num);
        console.log("배열1: " + randomNum);
        console.log("로또 배열 : "  + lotto);*/

    }
    return randomNum;
}
